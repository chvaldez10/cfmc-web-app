"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactSubmissionData = {
  name: string;
  email: string;
  phone?: string;
  subject: string[];
  message: string;
};

export type ContactSubmissionResponse = {
  success: boolean;
  message: string;
  submissionId?: string;
};

export async function submitContactForm(
  formData: ContactSubmissionData
): Promise<ContactSubmissionResponse> {
  try {
    const supabase = await createClient();

    // Insert the contact submission into the database
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone?.trim() || null,
        subject: formData.subject,
        message: formData.message.trim(),
        status: "new",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Database error:", error);
      throw new Error("Failed to save contact submission");
    }

    return {
      success: true,
      message: "Your message has been submitted successfully!",
      submissionId: data.id,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Failed to submit your message. Please try again later.",
    };
  }
}

export async function getContactSubmissions(
  status?: string,
  limit: number = 50
): Promise<any[]> {
  const supabase = await createClient();

  let query = supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Failed to fetch contact submissions:", error);
    throw new Error("Failed to fetch contact submissions");
  }

  return data || [];
}

export async function updateContactSubmissionStatus(
  id: string,
  status: "new" | "in_progress" | "resolved" | "spam"
): Promise<void> {
  const supabase = await createClient();

  const { error } = await supabase
    .from("contact_submissions")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("Failed to update contact submission status:", error);
    throw new Error("Failed to update contact submission status");
  }
}
