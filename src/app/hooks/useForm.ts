import useSWR from "swr";

interface FormData {
  // Define the structure of your form data here
}

interface UseFormResponse {
  data: FormData | undefined;
  error: any;
}

export default function useForm(id: string | undefined): UseFormResponse {
  let url = "";
  if (!id) {
    url = `/api/acs/forms`;
  } else {
    url = `/api/acs/forms/${id}`;
  }

  const { data, error } = useSWR<FormData>(url);

  return { data, error };
}
