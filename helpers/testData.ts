export interface ContactUsForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
  successSubmissionMessage: string;
}

export const contactUsData: ContactUsForm = {
  name: 'my name',
  email: 'myemai@myemail.com',
  message: 'my message',
  successSubmissionMessage: 'Success! Your details have been submitted successfully.',
};

export const arrCategories: string[] = ['WOMEN', 'MEN', 'KIDS'];
