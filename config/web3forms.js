// Web3Forms Configuration
// Get your access key from https://web3forms.com
export const WEB3FORMS_CONFIG = {
  accessKey:
    process.env.WEB3FORMS_ACCESS_KEY || "0eca37dd-258a-4e4d-ae02-a1d6cb4953fe",
  emails: {
    to: "mason@silverbackmarketing.com,Scottcompton552@yahoo.com",
    replyTo: "mason@silverbackmarketing.com,Scottcompton552@yahoo.com",
  },
  subjects: {
    quote: "New Quote Request from Install It Guy Website",
    contact: "New Contact Form Submission from Install It Guy Website",
  },
};
