export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string[];
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

// Additional form-related types for better type safety
export type FormField = keyof FormData;

export interface FormValidation {
  isValid: boolean;
  errors: FormErrors;
}

export interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
