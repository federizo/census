"use server";

import { encodedRedirect } from "@/utils/utils";
import { authCreateClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData): Promise<void> => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = authCreateClient();
  const origin = headers().get("origin");

  if (!email || !password) {
    // Instead of returning an error object, throw an error or handle it appropriately.
    throw new Error("Email and password are required");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return redirect(encodedRedirect("error", "/sign-up", error.message));
  } else {
    return redirect(
      encodedRedirect(
        "success",
        "/sign-up",
        "Thanks for signing up! Please check your email for a verification link."
      )
    );
  }
};

export const signInAction = async (formData: FormData): Promise<void> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = authCreateClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(encodedRedirect("error", "/sign-in", error.message));
  }

  return redirect("/protected");
};

export const forgotPasswordAction = async (
  formData: FormData
): Promise<void> => {
  const email = formData.get("email")?.toString();
  const supabase = authCreateClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return redirect(
      encodedRedirect("error", "/forgot-password", "Email is required")
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return redirect(
      encodedRedirect("error", "/forgot-password", "Could not reset password")
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return redirect(
    encodedRedirect(
      "success",
      "/forgot-password",
      "Check your email for a link to reset your password."
    )
  );
};

export const resetPasswordAction = async (
  formData: FormData
): Promise<void> => {
  const supabase = authCreateClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    return redirect(
      encodedRedirect(
        "error",
        "/protected/reset-password",
        "Password and confirm password are required"
      )
    );
  }

  if (password !== confirmPassword) {
    return redirect(
      encodedRedirect(
        "error",
        "/protected/reset-password",
        "Passwords do not match"
      )
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return redirect(
      encodedRedirect(
        "error",
        "/protected/reset-password",
        "Password update failed"
      )
    );
  }

  return redirect(
    encodedRedirect("success", "/protected/reset-password", "Password updated")
  );
};

export const signOutAction = async (): Promise<void> => {
  const supabase = authCreateClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
