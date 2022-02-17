(() => {
  const batman: string = 'Batman';
  const superman: string = "Superman's name is Clark Kent";
  const message: string = `${batman} is the best hero`;

  console.log(message);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toLocaleUpperCase() || 'no value');
})();
