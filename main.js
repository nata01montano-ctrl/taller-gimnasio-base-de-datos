function getAthletes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const athletes = [
        { id: 1, user: "jUAn pErez", status: "inactive", points: 45 },
        { id: 2, user: "mArIa gArCiA", status: "active", points: 88 },
        { id: 3, user: "cArLoS rOdrIguEz", status: "inactive", points: 12 },
        { id: 4, user: "lUciA fErNAnDeZ", status: "active", points: 95 },
        { id: 5, user: "pAbLo mArTiN", status: "inactive", points: 30 }
      ];
      resolve(athletes);
    }, 1200);
  });
}