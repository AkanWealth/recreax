import React from 'react';
import CtaSection from '@/component/mentorshipComps/CtaSection';
import HelpTalentsGrow from '@/component/mentorshipComps/TalentGrow';
import FaqComponent from '@/component/mentorshipComps/FaqComponent';
import MentorReasons from '@/component/mentorshipComps/MentorReasons';
import MentoringSteps from '@/component/mentorshipComps/MentoringSteps';
import WaysToSupportAsMentor from '@/component/mentorshipComps/WaysToSupportAsMentor';
export default function Program() {
    return (
        <div className="min-h-screen">
            <HelpTalentsGrow />
            <MentoringSteps />
            <WaysToSupportAsMentor />
            <FaqComponent />
           <MentorReasons />
            <CtaSection />

        </div>
    );
}
