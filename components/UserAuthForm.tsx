"use client";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
// import SignIn from "./SignIn";
import { signIn } from "next-auth/react";
import { Icons } from "./icons";
import { useToast } from "@/hooks/use-toast";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // throw new Error();
      await signIn("google");
    } catch (error) {
      //toast notification
      toast({
        title: "There was a problem",
        description: "We couldn't log you in with Google.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
