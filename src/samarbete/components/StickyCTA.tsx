

export const StickyCTA: React.FC = () => {
  return (
    <section className="animate-fadeIn fixed bottom-0 right-0 bg-gradient-to-t  hover:bg-collab-green  bg-collab-red z-40 p-3 px-6 laptop:text-lg text-sm text-warm-white rounded-tl-3xl  hover:scale-110 laptop:origin-right cursor-pointer">
            <a
              href="mailto:info@itflows.se?subject=Bokning konsultation&body=Hej, jag skulle vilja boka en första konsultation. Namn: företag: telefonnummer:"
              aria-label="Email me at info@itflows.se"
              className="flex gap-2 items-center font-light"
            >
              Boka konsultation
            </a>
    </section>
  )
}
