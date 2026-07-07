"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract fields
  const companyName = formData.get("companyName") as string;
  const department = formData.get("department") as string;
  const contactName = formData.get("contactName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const budget = formData.get("budget") as string;
  const timeline = formData.get("timeline") as string;
  const message = formData.get("message") as string;
  const antiSales = formData.get("antiSales") as string;

  // Server-side validation
  const errors: string[] = [];
  if (!companyName?.trim()) errors.push("会社名は必須です");
  if (!contactName?.trim()) errors.push("ご担当者名は必須です");
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("有効なメールアドレスを入力してください");
  if (!budget) errors.push("ご予算感を選択してください");
  if (!timeline) errors.push("希望時期を選択してください");
  if (!message?.trim()) errors.push("お問い合わせ内容は必須です");
  if (antiSales !== "on") errors.push("逆営業でないことの確認が必要です");

  if (errors.length > 0) {
    return { status: "error", message: errors.join("、") };
  }

  // TODO: Replace with actual email dispatch (e.g. Resend / Nodemailer)
  // Example:
  // await resend.emails.send({
  //   from: "noreply@skyaxes.jp",
  //   to: "info@skyaxes.jp",
  //   subject: `お問い合わせ: ${companyName}`,
  //   html: `<p>会社名: ${companyName}</p><p>担当者: ${contactName}</p>...`,
  // });

  console.log("Contact form submission:", {
    companyName, department, contactName, email, phone, budget, timeline, message,
  });

  // Simulate network delay
  await new Promise((r) => setTimeout(r, 600));

  return {
    status: "success",
    message: "お問い合わせを受け付けました。2営業日以内にご返信いたします。",
  };
}
