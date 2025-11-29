import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import { useAboutUs } from "@/hooks/useAboutUs";

const AboutUs = () => {
  const { t } = useTranslation();
  const { data: apiData, isLoading } = useAboutUs();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {t('aboutPage.backToHome')}
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {apiData?.title || t('aboutPage.title')}
            </h1>
            
            <div className="space-y-12">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {apiData?.intro || t('aboutPage.intro')}
                </p>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{apiData?.missionTitle || t('aboutPage.missionTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {apiData?.missionText || t('aboutPage.missionText')}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{apiData?.visionTitle || t('aboutPage.visionTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {apiData?.visionText || t('aboutPage.visionText')}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{apiData?.valuesTitle || t('aboutPage.valuesTitle')}</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{apiData?.innovationTitle || t('aboutPage.innovationTitle')}</h3>
                        <p className="leading-relaxed">
                          {apiData?.innovationText || t('aboutPage.innovationText')}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{apiData?.accessibilityTitle || t('aboutPage.accessibilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {apiData?.accessibilityText || t('aboutPage.accessibilityText')}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{apiData?.reliabilityTitle || t('aboutPage.reliabilityTitle')}</h3>
                        <p className="leading-relaxed">
                          {apiData?.reliabilityText || t('aboutPage.reliabilityText')}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{apiData?.localExpertiseTitle || t('aboutPage.localExpertiseTitle')}</h3>
                        <p className="leading-relaxed">
                          {apiData?.localExpertiseText || t('aboutPage.localExpertiseText')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">{apiData?.whoWeServeTitle || t('aboutPage.whoWeServeTitle')}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {apiData?.whoWeServeText || t('aboutPage.whoWeServeText')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ltr:ml-4 rtl:mr-4">
                      {apiData?.services ? (
                        apiData.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))
                      ) : (
                        <>
                          <li>{t('aboutPage.service1')}</li>
                          <li>{t('aboutPage.service2')}</li>
                          <li>{t('aboutPage.service3')}</li>
                          <li>{t('aboutPage.service4')}</li>
                          <li>{t('aboutPage.service5')}</li>
                          <li>{t('aboutPage.service6')}</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{apiData?.whyChooseTitle || t('aboutPage.whyChooseTitle')}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{apiData?.provenTrackLabel || t('aboutPage.provenTrackLabel')}</span> {apiData?.provenTrackText || t('aboutPage.provenTrackText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{apiData?.localSupportLabel || t('aboutPage.localSupportLabel')}</span> {apiData?.localSupportText || t('aboutPage.localSupportText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{apiData?.complianceLabel || t('aboutPage.complianceLabel')}</span> {apiData?.complianceText || t('aboutPage.complianceText')}
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">{apiData?.scalabilityLabel || t('aboutPage.scalabilityLabel')}</span> {apiData?.scalabilityText || t('aboutPage.scalabilityText')}
                  </p>
                </div>
              </section>

              {apiData?.histoire && (
                <section className="pt-8 border-t border-border">
                  <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {apiData.histoire}
                  </p>
                </section>
              )}

              {apiData?.equipe && (
                <section className="pt-8 border-t border-border">
                  <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {apiData.equipe}
                  </p>
                </section>
              )}

              {apiData?.realisations && (
                <section className="pt-8 border-t border-border">
                  <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {apiData.realisations}
                  </p>
                </section>
              )}

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">{apiData?.getInTouchTitle || t('aboutPage.getInTouchTitle')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {apiData?.getInTouchText || t('aboutPage.getInTouchText')}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>{apiData?.email || t('aboutPage.email')}</p>
                  <p>{apiData?.phone || t('aboutPage.phone')}</p>
                  <p>{apiData?.address || t('aboutPage.address')}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
