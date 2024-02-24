import {
  AboutSection,
  ContactForm,
  HeroSection,
  MyExperience,
  MyProjects,
  MySkills,
  MyTestimonial,
} from '@/components/organisms'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyExperience />
      <AboutSection />
      <MyProjects />
      <MyTestimonial />
      <ContactForm />
    </>
  )
}
