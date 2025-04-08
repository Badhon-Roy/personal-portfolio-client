"use server"

export const getAllBlogs = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`,{
            next : {
              revalidate : 30
            }
          })

        return res.json();
    } catch (error: any) {
        return new Error(error)
    }
}
export const getSingeBlog = async (id : string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,{
            next : {
              revalidate : 30
            }
          })

        return res.json();
    } catch (error: any) {
        return new Error(error)
    }
}