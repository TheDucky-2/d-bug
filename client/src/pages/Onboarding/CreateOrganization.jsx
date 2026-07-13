import { ArrowRight, LoaderCircle, Image } from "lucide-react"
import { useState } from "react"
import api from "@/config/axios";
import { toast } from "sonner";

const CreateOrganization = ({nextStep, isDark}) => {

  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationLogo: { url: '', name: '', size: 0, file: null }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.organizationName.trim()) return
    try{
      setIsCreating(true)
      const data = new FormData()
      data.append("organization_name", formData.organizationName)
      if (formData.organizationLogo.file) data.append("organization_logo", formData.organizationLogo.file)
      const res = await api.post("/organizations", data)
      toast.success(res.data.message)
      nextStep()
    }catch(error){
      toast.error(error.response?.data?.detail || error.response?.data?.message)
    }finally{
      setIsCreating(false)
    }
  }

  const containerStyle = isDark ? {
    width: '520px',
    maxWidth: 'calc(100vw - 48px)',
    borderRadius: '24px',
    padding: '48px',
    background: 'rgba(17,17,17,0.55)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.06)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    animation: 'formFadeIn 0.45s ease-out',
  } : {
    width: '520px',
    maxWidth: 'calc(100vw - 48px)',
    borderRadius: '24px',
    padding: '48px',
    background: 'rgba(255,255,255,0.82)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(15,23,42,0.06)',
    boxShadow: '0 20px 60px rgba(15,23,42,0.08)',
    animation: 'formFadeIn 0.45s ease-out',
  };

  const headingColor = isDark ? '#FAFAFA' : '#111827';
  const subtitleColor = isDark ? '#A1A1AA' : '#6B7280';
  const labelColor = isDark ? '#A1A1AA' : '#4B5563';
  const inputBg = isDark ? 'transparent' : 'rgba(255,255,255,0.7)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)';
  const inputColor = isDark ? '#FAFAFA' : '#111827';
  const inputHeight = '54px';
  const inputRadius = '14px';
  const inputPlaceholder = isDark ? '#6B7280' : '#9CA3AF';
  const focusBorder = '#EF4444';
  const focusShadow = '0 0 0 4px rgba(239,68,68,0.08)';
  const logoBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)';
  const logoColor = isDark ? '#A1A1AA' : '#6B7280';
  const btnBg = '#27272A';
  const btnColor = '#FFFFFF';
  const btnShadow = '0 4px 20px rgba(39,39,42,0.3)';
  const btnHoverShadow = '0 12px 30px rgba(39,39,42,0.4)';

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: 600,
          color: headingColor,
          letterSpacing: '-0.5px',
          margin: 0,
        }}>
          Create your organization
        </h1>
        <p style={{
          marginTop: '24px',
          fontSize: '14px',
          lineHeight: '1.5',
          color: subtitleColor,
          fontWeight: 400,
          margin: '24px 0 0',
        }}>
          Your workspace for projects, repositories, and bug reports.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 500,
            color: labelColor,
            marginBottom: '8px',
          }}>
            Organization Name
          </label>
          <input
            type="text" placeholder="Acme Engineering"
            value={formData.organizationName}
            onChange={e => setFormData(p => ({ ...p, organizationName: e.target.value }))}
            required
            style={{
              width: '100%',
              height: inputHeight,
              padding: '0 16px',
              fontSize: '14px',
              borderRadius: inputRadius,
              outline: 'none',
              background: inputBg,
              border: `1px solid ${inputBorder}`,
              color: inputColor,
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              boxSizing: 'border-box',
            }}
            onFocus={e => {
              e.currentTarget.style.borderColor = focusBorder;
              e.currentTarget.style.boxShadow = focusShadow;
            }}
            onBlur={e => {
              e.currentTarget.style.borderColor = inputBorder;
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{
            fontSize: '12px',
            fontWeight: 500,
            color: labelColor,
            margin: '0 0 8px',
          }}>
            Organization Logo <span style={{ opacity: 0.6 }}>(optional)</span>
          </p>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            height: inputHeight,
            padding: '0 16px',
            fontSize: '14px',
            borderRadius: inputRadius,
            cursor: 'pointer',
            background: inputBg,
            border: `1px dashed ${logoBorder}`,
            color: logoColor,
            transition: 'border-color 0.2s ease',
            boxSizing: 'border-box',
          }}>
            <Image size={16} />
            Upload Image
          </label>
          <input type="file" accept="image/*" className="hidden"
            onChange={e => {
              const file = e.target.files?.[0]
              if (file) setFormData(p => ({
                ...p,
                organizationLogo: {
                  url: URL.createObjectURL(file),
                  name: file.name,
                  size: file.size,
                  file
                }
              }))
            }}
          />
        </div>

        <button type="submit" disabled={isCreating}
          style={{
            width: '100%',
            height: '54px',
            borderRadius: inputRadius,
            background: btnBg,
            color: btnColor,
            border: 'none',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: isCreating ? 'not-allowed' : 'pointer',
            opacity: isCreating ? 0.6 : 1,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: btnShadow,
          }}
          onMouseEnter={e => {
            if (!isCreating) {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = btnHoverShadow;
            }
          }}
          onMouseLeave={e => {
            if (!isCreating) {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = btnShadow;
            }
          }}
          onMouseDown={e => {
            if (!isCreating) {
              e.currentTarget.style.transform = 'translateY(0) scale(0.98)';
            }
          }}
          onMouseUp={e => {
            if (!isCreating) {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }
          }}
        >
          {isCreating && <LoaderCircle className="animate-spin" size={16} />}
          {isCreating ? "Creating" : "Continue"}
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </form>
    </div>
  )
}

export default CreateOrganization
