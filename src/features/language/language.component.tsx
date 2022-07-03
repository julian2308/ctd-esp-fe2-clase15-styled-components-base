import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import { SLanguageContainer, SButtonLang } from './styles';


const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <SLanguageContainer className={'language'}>
      <SButtonLang
        isActive = {language === 'SPANISH' ? true : false}
        onClick={() => {
          setLanguage('SPANISH')
        }}>
        {t('language.spanish')}
      </SButtonLang>
      <SButtonLang
        isActive = {language === 'ENGLISH' ? true : false}
        onClick={() => setLanguage('ENGLISH')}>
        {t('language.english')}
      </SButtonLang>
      <SButtonLang
        isActive = {language === 'PORTUGUESE' ? true : false}
        onClick={() => setLanguage('PORTUGUESE')}>
        {t('language.portuguese')}
      </SButtonLang>
    </SLanguageContainer>
  );
};
export default LanguageComponent;
