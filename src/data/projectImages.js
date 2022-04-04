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

const comfy = importAll(
  require.context("../assets/projects/comfy", false, /\.(png|jpe?g|svg)$/)
);

const redux = importAll(
  require.context("../assets/projects/redux", false, /\.(png|jpe?g|svg)$/)
);

const airtable = importAll(
  require.context("../assets/projects/airtable", false, /\.(png|jpe?g|svg)$/)
);

const mdx = importAll(
  require.context("../assets/projects/mdx", false, /\.(png|jpe?g|svg)$/)
);

const gatsbyStrapi = importAll(
  require.context(
    "../assets/projects/gatsbyStrapi",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const strapiBackEnd = importAll(
  require.context(
    "../assets/projects/strapiBackEnd",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const comfyJS = importAll(
  require.context("../assets/projects/comfyJS", false, /\.(png|jpe?g|svg)$/)
);

const gallery = importAll(
  require.context("../assets/projects/gallery", false, /\.(png|jpe?g|svg)$/)
);

const backroad = importAll(
  require.context("../assets/projects/backroad", false, /\.(png|jpe?g|svg)$/)
);

const tea = importAll(
  require.context("../assets/projects/tea", false, /\.(png|jpe?g|svg)$/)
);

const portfolio = importAll(
  require.context("../assets/projects/portfolio", false, /\.(png|jpe?g|svg)$/)
);

const chouweihan = importAll(
  require.context("../assets/projects/chouweihan", false, /\.(png|jpe?g|svg)$/)
);

const aboutImages = importAll(
  require.context("../assets/about", false, /\.(png|jpe?g|svg)$/)
);

const scmImages = importAll(
  require.context("../assets/projects/scm", false, /\.(png|jpe?g|svg)$/)
);


const ethJoyImages = importAll(
  require.context("../assets/projects/ethjoy", false, /\.(png|jpe?g|svg)$/)
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
  comfy,
  redux,
  airtable,
  mdx,
  gatsbyStrapi,
  strapiBackEnd,
  comfyJS,
  gallery,
  portfolio,
  tea,
  backroad,
  chouweihan,
  aboutImages,
  scmImages,
  ethJoyImages
};
