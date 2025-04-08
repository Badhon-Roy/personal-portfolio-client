"use server"

export const getAllProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
            next: {
                revalidate: 30
            }
        })
        return res.json();
    } catch (error: any) {
        return new Error(error)
    }
}