"use server";

export const callToAction = async (): Promise<{ success: boolean, message?: string }> => {
    try {
        window.open
        return { success: true, message: "Registration successful" };
    } catch (error: any) {
        return { success: false, message: error.message || "Registration failed" };
    }
};
