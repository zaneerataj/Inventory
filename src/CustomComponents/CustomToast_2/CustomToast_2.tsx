import React, { FC } from 'react';
import { Button } from '../../../components/ui/button';
import { ToastAction } from '../../../components/ui/toast';
import { useToast } from '../../../components/ui/use-toast';

const CustomToast_2: FC = () => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Toast
    </Button>
  );
};
export default CustomToast_2;
