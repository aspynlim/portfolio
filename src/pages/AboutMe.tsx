import CliftonStrengths from './projects/aboutMe/CliftonStrengths'

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <CliftonStrengths />
      <p>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1GqHlXnoBVMoRCRhZWRPVIaVCMK5vHyko/view?usp=sharing"
          rel="Resume noreferrer"
        >
          이력서
        </a>
      </p>
    </div>
  )
}

export default AboutMe

// https://pspdfkit.com/blog/2018/open-pdf-in-react/
