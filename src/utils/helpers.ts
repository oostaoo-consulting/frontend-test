export default function formatTime(time: number) {
  let hours = Math.floor(time / 3600).toString();
  let minutes = Math.floor((time % 3600) / 60).toString();
  let seconds = (time % 60).toString();

  return [hours, minutes, seconds].reduce((red: string[], el) => {
    return el.length < 2 ? red.concat(`0${el}`) : red.concat(el);
  }, []).join(':');
}
