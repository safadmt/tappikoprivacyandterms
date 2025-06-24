import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Calendar, Globe } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'definitions',
      title: '1. DEFINITIONS',
      content: `The parties referred to in these Terms of Service shall be defined as follows:
      
      a) Owner, Us, We: The Owner, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. Tappiko, Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as all employees and affiliates of the Owner.
      
      b) You, the User, the Client: You, as the user of the Website, will be referred to throughout these Terms of Service with second-person pronouns such as You, Your, Yours, or as User or Client. For the purpose of these Terms of Service, the term "User" or "you" shall mean any natural or legal person who is accessing the Website.
      
      c) Parties: Collectively, the parties to these Terms of Service (the Owner and You) will be referred to as Parties.`
    },
    {
      id: 'assent',
      title: '2. ASSENT & ACCEPTANCE',
      content: `By using the Website, You warrant that You have read and reviewed these Terms of Service and that You agree to be bound by it. If You do not agree to be bound by these Terms of Service, please leave the Website immediately. The Owner only agrees to provide use of this Website and Services to You if You assent to these Terms of Service.`
    },
    {
      id: 'age',
      title: '3. AGE RESTRICTION',
      content: `You must be at least 18 (eighteen) years of age to use this Website, or any Services contained herein. By using this Website, You represent and warrant that You are at least 18 years of age and may legally agree to these Terms of Service. The Owner assumes no responsibility or liability for any misrepresentation of Your age.`
    },
    {
      id: 'about',
      title: '4. ABOUT THE SITE',
      content: `The Website is an online store which carries out sales of products. We reserve the right to refuse service or refuse to sell the products on the Website at our sole discretion to anyone for any reason at any time. The Website does not screen or censor the users who register on and access the Website. You assume all risks associated with dealing with other users with whom you come in contact through the Website.`
    },
    {
      id: 'license',
      title: '5. LICENSE TO USE WEBSITE',
      content: `The Owner grants You a non-exclusive, limited, non-transferable and revocable license to use the Owner Materials solely in connection with Your use of the Website and Services. You agree not to collect the contact information of other Users from the Website or download or copy any information by means of unsolicited access. Any unauthorized use by you shall terminate the permission or license granted to you by the Website.`
    },
    {
      id: 'ip',
      title: '6. INTELLECTUAL PROPERTY',
      content: `You agree that the Website and all Services provided by the Owner are the property of the Owner, including all copyrights, trademarks, trade secrets, patents, and other intellectual property. You agree not to reproduce or distribute the Owner IP in any way without express written permission from the Owner.`
    },
    {
      id: 'obligations',
      title: '7. USER OBLIGATIONS',
      content: `As a user of the Website or Services, You may be asked to register with Us. You are responsible for ensuring the accuracy of this information and maintaining the safety and security of Your identifying information. Providing false or inaccurate information or using the Website or Services to further fraud or unlawful activity is grounds for immediate termination of these Terms of Service.`
    },
    {
      id: 'payment',
      title: '8. PAYMENT & FEES',
      content: `Should You register for any of the paid Services on this website or purchase any product or service, You agree to pay Us the specific monetary amounts required. These monetary amounts will be described to You during Your account registration and/or confirmation process. We reserve the right to refuse service at our sole discretion.`
    },
    {
      id: 'acceptable',
      title: '9. ACCEPTABLE USE',
      content: `You agree not to use the Website or Services for any unlawful purpose or in any way that could damage the Website, Services or general business of the Owner. This includes but is not limited to: harassment, intellectual property violations, uploading viruses, perpetrating fraud, gambling schemes, publishing obscene material, or gathering information about others unlawfully.`
    },
    {
      id: 'communication',
      title: '10. COMMUNICATION',
      content: `By agreeing to these Terms, you consent to receive communications via phone or electronic records from the Website including e-mail messages about products and services. Communication can also be by posting notices on the Website.`
    },
    {
      id: 'privacy',
      title: '11. PRIVACY INFORMATION',
      content: `Through Your Use of the Website and Services, You may provide Us with certain information. We use this information to ensure Your continued good experience on Our website. If You choose to terminate Your account, the Owner may store some information about You for 30 days, after which it will be deleted.`
    },
    {
      id: 'sales',
      title: '12. SALE OF GOODS/SERVICES',
      content: `The Owner may sell goods or services or allow third parties to sell on the Website. We undertake to be as accurate as possible with product information but do not guarantee accuracy. You purchase products at Your own risk. We may limit quantities and restrict sales at our sole discretion.`
    },
    {
      id: 'shipping',
      title: '13. SHIPPING/DELIVERY/RETURN POLICY',
      content: `For returns, contact us at tappiko.official@gmail.com. Once confirmed, we will communicate further proceedings. We will make reimbursements for returns within 30 days using the same payment method as the initial transaction.`
    },
    {
      id: 'security',
      title: '14. REVERSE ENGINEERING & SECURITY',
      content: `You agree not to reverse engineer or disassemble any code or software from the Website or violate the security of the Website through unauthorized access or circumvention of security tools.`
    },
    {
      id: 'dataloss',
      title: '15. DATA LOSS',
      content: `The Owner does not accept responsibility for the security of Your account or content. You agree that Your use of the Website or Services is at Your own risk.`
    },
    {
      id: 'indemnification',
      title: '16. INDEMNIFICATION',
      content: `You agree to defend and indemnify the Owner against any legal claims and demands which may arise from Your use or misuse of the Website or Services, Your breach of these Terms, or Your conduct or actions.`
    },
    {
      id: 'spam',
      title: '17. SPAM POLICY',
      content: `You are strictly prohibited from using the Website for illegal spam activities, including gathering email addresses and personal information from others or sending mass commercial emails.`
    },
    {
      id: 'thirdparty',
      title: '18. THIRD-PARTY LINKS & CONTENT',
      content: `The Owner may post links to third-party websites or services. You agree that the Owner is not responsible or liable for any loss or damage caused as a result of Your use of any third-party services.`
    },
    {
      id: 'modification',
      title: '19. MODIFICATION & VARIATION',
      content: `The Owner may modify these Terms of Service at any time without notice. All modifications are in full force immediately upon posting. You agree to routinely monitor these Terms and clear Your cache to avoid accessing prior versions.`
    },
    {
      id: 'entire',
      title: '20. ENTIRE AGREEMENT',
      content: `This Agreement constitutes the entire understanding between the Parties with respect to any and all use of this Website and supersedes all prior agreements.`
    },
    {
      id: 'interruptions',
      title: '21. SERVICE INTERRUPTIONS',
      content: `The Owner may need to interrupt Your access to perform maintenance. You agree that the Owner shall have no liability for any damage or loss caused as a result of such downtime.`
    },
    {
      id: 'termination',
      title: '22. TERM, TERMINATION & SUSPENSION',
      content: `The Owner may terminate these Terms at any time for any reason. The Owner specifically reserves the right to terminate if You violate any terms, including intellectual property rights violations or illegal activities.`
    },
    {
      id: 'warranties',
      title: '23. NO WARRANTIES',
      content: `Your use of the Website and Services is at Your sole risk. Services are provided on an "As Is" basis. The Owner disclaims all warranties and makes no warranties that the Website will meet Your needs or be uninterrupted, error-free, or secure.`
    },
    {
      id: 'liability',
      title: '24. LIMITATION ON LIABILITY',
      content: `The Owner is not liable for any damage that may occur to You as a result of Your use of the Website, to the fullest extent permitted by law. Maximum liability is limited to the extent of service directly provided by this platform.`
    },
    {
      id: 'general',
      title: '25. GENERAL PROVISIONS',
      content: `All communications shall be in English. The laws of India shall govern any disputes, with exclusive jurisdiction of courts at Kerala, India. If any part of these Terms is held invalid, the remaining parts will be enforced to the maximum extent possible.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Terms and Conditions
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Effective: February 21, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="font-medium">tappiko.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">THE AGREEMENT</h2>
          <p className="text-slate-700 leading-relaxed">
            The use of this website and services on this website provided by Tappiko are subject to the following Terms & Conditions. 
            By accessing the Website and/or purchasing something from us, you engage in our "Service" and agree to be bound by these Terms of Service. 
            These Terms apply to all users of the site, including vendors, buyers, customers, merchants, browsers and contributors of content.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-6 text-left hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  {section.title}
                </h3>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-8 pb-6 border-t border-slate-100">
                  <div className="pt-4">
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Questions or Concerns?</h3>
            <p className="mb-6 opacity-90">
              For any questions, concerns, or disputes regarding these Terms of Service, please contact us:
            </p>
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg px-6 py-3 inline-flex">
              <Mail className="w-5 h-5" />
              <a 
                href="mailto:tappiko.official@gmail.com" 
                className="font-medium hover:underline"
              >
                tappiko.official@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>
            By continuing to use our website, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;