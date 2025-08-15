import React from 'react';
import CtaSection from '@/component/mentorshipComps/CtaSection';
import HelpTalentsGrow from '@/component/mentorshipComps/TalentGrow';
import FaqComponent from '@/component/mentorshipComps/FaqComponent';
import MentorReasons from '@/component/mentorshipComps/MentorReasons';
import MentoringSteps from '@/component/mentorshipComps/MentoringSteps';
import WaysToSupportAsMentor from '@/component/mentorshipComps/WaysToSupportAsMentor';
export default function Program() {
    return (
        <div className="flex flex-col w-full">
            <HelpTalentsGrow />
            <MentorReasons />
            <MentoringSteps />
            <WaysToSupportAsMentor />
            <FaqComponent />
           
            <CtaSection />

        </div>
    );
}
