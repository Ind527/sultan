import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your server
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Terjadi kesalahan",
        description: "Maaf, pesan Anda tidak dapat dikirim. Silakan coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nama Lengkap *</Label>
        <Input
          id="name"
          {...register("name", { required: "Nama lengkap wajib diisi" })}
          className="w-full px-4 py-3"
          placeholder="Masukkan nama lengkap"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email wajib diisi",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Alamat email tidak valid"
            }
          })}
          className="w-full px-4 py-3"
          placeholder="Masukkan alamat email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Perusahaan</Label>
        <Input
          id="company"
          {...register("company")}
          className="w-full px-4 py-3"
          placeholder="Masukkan nama perusahaan (opsional)"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Pesan *</Label>
        <Textarea
          id="message"
          {...register("message", { required: "Pesan wajib diisi" })}
          className="w-full px-4 py-3"
          rows={4}
          placeholder="Masukkan pesan Anda"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      
      <div className="text-right">
        <Button
          type="submit"
          className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
