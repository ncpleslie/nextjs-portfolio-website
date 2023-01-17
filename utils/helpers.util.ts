export const canRun3dScene = (): boolean => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl')

  if (!gl) {
    return false
  }

  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
  const vendor: string = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)

  canvas.remove()

  // Intel graphics are unable to render 3d scenes without stuttering/causing performance issues.
  return !vendor.toLowerCase().includes('intel')
}
