"use client";
import { useRouter } from "next/navigation";
interface LoginbuttonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect" /*mode by default if user doesn't choose */,
  asChild,
}: LoginbuttonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer ">
      {children}
    </span>
  );
};
