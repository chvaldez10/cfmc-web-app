"use server";

export async function createMemberInquiry(formData: FormData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const inquiryType = formData.get("inquiryType");
  const message = formData.get("message");

  console.log({ fullName, email, phoneNumber, inquiryType, message });
}
