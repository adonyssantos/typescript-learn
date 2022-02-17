(() => {
  let avenger: any = 1234;
  let exist;
  let power;

  avenger = 'Thor';
  console.log((avenger as string).charAt(0));

  avenger = 150.32654654;
  console.log(<number>avenger.toFixed(2));

  console.log(exist);
  console.log(power);
})();
