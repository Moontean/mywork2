
"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


interface SettingsFormsProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingForm: React.FC<SettingsFormsProps> = ({ initialData }) => {
const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);

  const form = useForm<SettingsFormValues> ({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
  });

  const onSubmit = async(data: SettingsFormValues) => {
    console.log(data);
  }

  return (
    <>
    <div className="flex items-center justify-between">
        <Heading
       title="Setting"
       description="Manage store preferences"
       />
       <Button
       variant={"destructive"}
       size="icon"
       onClick={() => {}}
       >
        <Trash className="h-4 w-4"/>

       </Button>
    </div>
    <Separator/> //может быть экспорт из другой дериктории

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
       <div className="grid grid-cols-3 gap-8">
        Hello Setting
        </div>  
      </form> 
    </Form>
    </>
  );
};

export default SettingForm; // z lj,fdbk
