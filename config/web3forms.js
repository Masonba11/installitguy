// Web3Forms Configuration
// Get your access key from https://web3forms.com
export const WEB3FORMS_CONFIG = {
  accessKey:
    process.env.WEB3FORMS_ACCESS_KEY || "0bac6866-4755-49c8-969e-6963e0a552a0",
  emails: {
    to: "mason@silverbackmarketing.com,Scottcompton552@yahoo.com",
    replyTo: "Scottcompton552@yahoo.com",
  },
  subjects: {
    quote: "New Quote Request from Install It Guy Website",
    contact: "New Contact Form Submission from Install It Guy Website",
  },
};
