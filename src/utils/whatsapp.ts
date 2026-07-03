export const createWhatsAppUrl = (phoneNumber: string, message: string): string => {
  const normalizedPhone = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${normalizedPhone || "REEMPLAZAR_NUMERO"}?text=${encodeURIComponent(message)}`;
};
