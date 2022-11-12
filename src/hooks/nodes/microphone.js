export default async function microphoneNode(audioCtx, properties, mediaStreamRef,) {
  try {
    mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
    },);
    const mic = audioCtx.createMediaStreamSource(mediaStreamRef.current,);

    return mic;
  } catch (err) {
    console.warn('Microphone not found', err,);
  }
  return false;
}
