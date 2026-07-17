import api from "@/config/axios";

export const sendInvite = async (formData) => {

    const inviteData =  {
        to_email: formData.toEmail,
        role: formData.role.toLowerCase(),
        optional_comments : formData.optionalComments || null
    }
    console.log("EmIL",formData.toEmail)

    const invite = await api.post("/invite", inviteData )
    return invite.data
}