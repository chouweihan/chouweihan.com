function importAll(path) {
  return path
    .keys()
    .map(path)
    .map((obj) => {
      return obj.default;
    });
}

const spendAway = importAll(
  require.context("../assets/projects/spendaway", false, /\.(png|jpe?g|svg)$/)
);

const gerg = importAll(
  require.context("../assets/projects/gerg", false, /\.(png|jpe?g|svg)$/)
);

const githubUser = importAll(
  require.context("../assets/projects/githubUser", false, /\.(png|jpe?g|svg)$/)
);

const nodemailer = importAll(
  require.context("../assets/projects/nodemailer", false, /\.(png|jpe?g|svg)$/)
);

const jobauth = importAll(
  require.context("../assets/projects/jobauth", false, /\.(png|jpe?g|svg)$/)
);

const homesafe = importAll(
  require.context("../assets/projects/homesafe", false, /\.(png|jpe?g|svg)$/)
);

const osce = importAll(
  require.context("../assets/projects/osce", false, /\.(png|jpe?g|svg)$/)
);

const canvas = importAll(
  require.context("../assets/projects/canvas", false, /\.(png|jpe?g|svg)$/)
);

const chess01 = importAll(
  require.context("../assets/projects/chess01", false, /\.(png|jpe?g|svg)$/)
);

const chess3d = importAll(
  require.context("../assets/projects/chess3d", false, /\.(png|jpe?g|svg)$/)
);

const dyslexia = importAll(
  require.context("../assets/projects/dyslexia", false, /\.(png|jpe?g|svg)$/)
);

const parkaway = importAll(
  require.context("../assets/projects/parkaway", false, /\.(png|jpe?g|svg)$/)
);

export {
  spendAway,
  gerg,
  githubUser,
  nodemailer,
  jobauth,
  homesafe,
  osce,
  canvas,
  chess01,
  chess3d,
  dyslexia,
  parkaway,
};
