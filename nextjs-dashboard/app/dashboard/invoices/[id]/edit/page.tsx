import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Edit Invoice',
};


interface EditInvoiceParams {
  id: string;
}

interface EditInvoiceProps {
  params: EditInvoiceParams;
}

const Page: React.FC<EditInvoiceProps> = async ({ params }) => {
  const { id } = params;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      ></Breadcrumbs>
      <Form invoice={invoice} customers={customers} />
    </main>
  );
};

export default Page;
