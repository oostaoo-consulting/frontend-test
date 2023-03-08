export default function formatTime(time: number) {

  let seconds = (time % 60).toString();

  return [seconds].reduce((red: string[], el) => {
    return el.length < 2 ? red.concat(`0${el}`) : red.concat(el);
  }, []).join(':');
}
