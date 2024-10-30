import { ImageSourcePropType } from "react-native";

export interface TextSegment {
  bold?: boolean;
  content: string;
}

export interface SlideContent {
  type: "header" | "text" | "image";
  content: string | TextSegment[];
}

export interface Slide {
  id: string;
  content: SlideContent[];
}

export interface Module {
  id: string;
  title: string;
  slides: Slide[];
  imageUrl: ImageSourcePropType;
}

export const modules: Module[] = [
  {
    id: "1",
    title: "Preoperative Assessment",
    imageUrl: require("@/assets/images/modules/icon/1.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 1: Preoperative Assessment",
          },
          {
            type: "text",
            content: [
              { content: "The module will approximately take " },
              { content: "35 minutes", bold: true },
              { content: "." },
            ],
          },
        ],
      },
      {
        id: "2",
        content: [
          { type: "header", content: "Objectives" },
          {
            type: "text",
            content:
              "1. Outline the basic components of a standard pre-anesthetic history.",
          },
          {
            type: "text",
            content:
              "2. Recognize the impact of systemic disease on surgery and anesthesia (and vice versa).",
          },
          {
            type: "text",
            content:
              '3. Formulate an anesthetic plan based around the "3 considerations" principle.',
          },
          { type: "text", content: "a. Anesthetic considerations" },
          { type: "text", content: "b. Patient considerations" },
          { type: "text", content: "c. Surgical considerations" },
          {
            type: "text",
            content:
              "4. Describe the ASA (American Society of Anesthesiologists) physical status classification system.",
          },
        ],
      },
      {
        id: "3",
        content: [
          {
            type: "text",
            content:
              "For more learning please refer to: Sauvé R, Bryson G. Chapter 3. Preoperative evaluation. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
        ],
      },
      {
        id: "4",
        content: [
          {
            type: "header",
            content: "Case Introduction",
          },
          {
            type: "text",
            content:
              "Johnny Morris is a 22-year-old male who presents to the emergency room with 1 day of right lower quadrant abdominal pain and nausea. He is evaluated by the surgeon, who determines that Johnny has acute appendicitis. He is immediately booked for an emergency laparoscopic appendectomy.",
          },
          {
            type: "text",
            content:
              "You are a third-year medical student currently on your anesthesiology rotation. Your preceptor asks you to assess the patient in the pre-op area…",
          },
        ],
      },
      {
        id: "5",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #1: History of Presenting Illness",
          },
          {
            type: "text",
            content: "1. Ask the patient why they are having surgery",
          },
          {
            type: "text",
            content:
              "2. Determine the nature of the problem, severity, and any past interventions.",
          },
          {
            type: "text",
            content: "3. Determine the planned surgical procedure",
          },
          {
            type: "text",
            content:
              "4. Understanding the surgical procedure will help you determine:",
          },
          {
            type: "text",
            content: "a. risks of surgical complications (i.e. blood loss)",
          },
          {
            type: "text",
            content: "b. risks of perioperative complications",
          },
          {
            type: "text",
            content: "c. need for unusual positioning",
          },
          {
            type: "text",
            content:
              "d. options for anesthesia and analgesia (e.g., epidural analgesia for postoperative pain control)",
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #2: Past Anesthetic History",
          },
          {
            type: "text",
            content: "Pro-tip: Look at prior anesthetic records.",
          },
          {
            type: "text",
            content:
              "- Elicit information regarding any reactions to previous anesthetics (e.g., postoperative nausea and vomiting (PONV), delayed emergence).",
          },
          {
            type: "text",
            content:
              "- Ask about family history of adverse reactions such as malignant hyperthermia and pseudocholinesterase deficiency, which are two hereditary disorders that impact anesthetic management.",
          },
          {
            type: "text",
            content:
              "- If there is a previous anesthetic record, look for information related to procedures (e.g., ease of IV access) and complications from anesthesia (e.g., difficult intubation).",
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #3: Past Medical History",
          },
          {
            type: "text",
            content:
              "Pay attention to the following as these are predictors for perioperative complications.",
          },
          {
            type: "text",
            content:
              "Breathing problems such as recent upper respiratory tract infection, asthma, chronic obstructive pulmonary disease (COPD), or obstructive sleep apnea (OSA)",
          },
          {
            type: "text",
            content:
              "Cardiovascular diseases such as systemic hypertension, coronary artery disease, dysrhythmias, valvular heart disease, congestive heart failure, cerebrovascular disease, or peripheral vascular disease",
          },
          {
            type: "text",
            content:
              "Deficits such as stroke or cognitive dysfunction (e.g., delirium or dementia)",
          },
          {
            type: "text",
            content: "Endocrine disorders such as diabetes mellitus",
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #3: Drug History - Prescribed",
          },
          {
            type: "text",
            content:
              "Certain medications need to be reduced, discontinued, or switched to alternative agents prior to surgery.",
          },
          {
            type: "text",
            content: "Examples include:",
          },
          {
            type: "text",
            content:
              "• Dosage of long-acting insulins is often reduced on the day of surgery.",
          },
          {
            type: "text",
            content:
              "• Oral hypoglycemic agents, short-acting insulins, diuretics, ACE inhibitors, and angiotensin-receptor blockers are usually discontinued on the day of surgery whereas most oral anticoagulants are discontinued a few days before surgery.",
          },
          {
            type: "text",
            content:
              "• Warfarin is often switched to a low-molecular-weight heparin a few days before surgery if anticoagulation must be maintained prior to surgery.",
          },
        ],
      },
      {
        id: "9",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #3: Drug History – Prescribed",
          },
          {
            type: "text",
            content: "Pay particular attention to analgesics.",
          },
          {
            type: "text",
            content: "Record the analgesic dosage and frequency of use.",
          },
          {
            type: "text",
            content:
              "For opiates, an estimate of the 24-h consumption is important as opioid-tolerant individuals will require higher-than-average doses of opiates and should receive, whenever possible, alternative analgesic regimens (e.g., oral or IV non-steroidal anti-inflammatory drugs, epidural analgesia, IV ketamine infusion) to reduce the amount of opiate needed to achieve pain control.",
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content:
              "Pre-Anesthetic History #3: Drug History – Over-the-counter",
          },
          {
            type: "text",
            content:
              "Over-the-counter products – These include over-the-counter medications, vitamins, minerals, supplements, and herbal products.",
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #3: Drug History – Nicotine",
          },
          {
            type: "text",
            content:
              "Smoking impairs respiratory function (i.e., decreased clearance of pulmonary secretions, increased airway reactivity, increased carboxyhemoglobin levels).",
          },
          {
            type: "text",
            content:
              "Ex-smokers: determine when they stopped smoking as they may still be at an increased risk of smoking-related respiratory complications if they have quit smoking < 2 weeks of surgery.",
          },
          {
            type: "text",
            content:
              "An estimate of the pack-year exposure, when possible, may help you determine whether a patient may have COPD or not.",
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #3: Drug History – Alcohol",
          },
          {
            type: "text",
            content:
              "Type and amount consumed weekly as chronic consumption of significant amounts of alcohol can increase the doses of drugs needed to achieve anesthesia or analgesia.",
          },
          {
            type: "text",
            content:
              "Last episode of alcohol consumption as acute alcohol intoxication may decrease the doses of drugs needed to achieve anesthesia or analgesia.",
          },
          {
            type: "text",
            content: "Past history of alcohol withdrawal.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content:
              "Pre-Anesthetic History #3: Drug History – Recreational drugs",
          },
          {
            type: "text",
            content:
              "Ask about type of drug used (e.g., cannabis, heroin, cocaine, methamphetamines, etc.), frequency and amount of use, and last episode of drug use (to determine intoxication or risk of withdrawal).",
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #4: Allergies",
          },
          {
            type: "text",
            content:
              "As part of the drug history, take a history about possible allergies:",
          },
          {
            type: "text",
            content:
              "Ask about reactions to drugs, adhesives, or latex to be avoided in the operating room.",
          },
          {
            type: "text",
            content:
              "Document the nature and severity of the adverse reaction to distinguish between an allergy / hypersensitivity reaction (e.g., rash, throat or tongue swelling) and intolerances / side effects (e.g., nausea, diarrhea).",
          },
          {
            type: "text",
            content:
              "If an allergy is reported, determine whether allergy testing has been done, especially for substances such as antibiotics and latex.",
          },
          {
            type: "text",
            content: "True allergies to anesthetic agents are rare.",
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #5: Fasting Status",
          },
          {
            type: "text",
            content:
              "For elective surgery: patients should be appropriately fasted prior to anesthesia to prevent the risk of aspiration.",
          },
          {
            type: "text",
            content:
              "Determine when the patient last ate solid food and drank.",
          },
          {
            type: "text",
            content:
              "Distinguish between clear fluids (e.g., water, apple or cranberry juice, black tea, black coffee), non-clear fluids (e.g., milk, breast milk, orange juice, etc.), and solid food as the duration to empty the stomach is affected by the type of fluid or food ingested.",
          },
          {
            type: "text",
            content:
              "For patients with traumatic injuries, gastric emptying may cease after the injury so determine the time of injury relative to the time of last ingestion.",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "Pre-Anesthetic History #6: Review of Systems",
          },
          {
            type: "text",
            content: "Use a systematic approach (e.g., head-to-toe).",
          },
          {
            type: "text",
            content:
              "Cardiorespiratory symptoms are the most important to determine. Ask about:",
          },
          {
            type: "text",
            content: "• Chest pain",
          },
          {
            type: "text",
            content: "• Shortness of breath",
          },
          {
            type: "text",
            content: "• Functional capacity",
          },
          {
            type: "text",
            content:
              "• Risk factors for obstructive sleep apnea (to be discussed in more detail later).",
          },
          {
            type: "text",
            content:
              "Other things to enquire about include gastroesophageal reflux, thyroid disorders, renal and hepatic disorders or dysfunction, and bleeding / coagulation disorders.",
          },
          {
            type: "text",
            content:
              "If the surgery has potential for significant blood loss, ensure consent for blood transfusion has been given (or refused) by the patient.",
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content: "SAMPLE History",
          },
          {
            type: "text",
            content:
              "In emergency situations, when a full history would cause undue delay, it may be more appropriate to take a SAMPLE history:",
          },
          {
            type: "text",
            content: "• Signs/symptoms",
          },
          {
            type: "text",
            content: "• Allergies",
          },
          {
            type: "text",
            content: "• Medications",
          },
          {
            type: "text",
            content: "• Past medical history",
          },
          {
            type: "text",
            content: "• Last oral intake",
          },
          {
            type: "text",
            content: "• Events leading up to presenting illness/injury",
          },
          {
            type: "text",
            content:
              "If the patient is unresponsive, often much of this information can be obtained from a family member or friend or found in the patient's chart.",
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Exercise Capacity",
          },
          {
            type: "text",
            content:
              "A patient’s ability (or inability) to exercise is a good indicator of postoperative cardiopulmonary and neurocognitive complications.",
          },
          {
            type: "text",
            content:
              "Exercise capacity is measured in terms of metabolic equivalents (1 MET = consumption of 3.5 mL O2/kg/min of body weight).",
          },
          {
            type: "text",
            content:
              "Good exercise tolerance is considered to be more than 4 METs. An exercise tolerance of 4 or less METs may require further preoperative workup.",
          },
          {
            type: "text",
            content: "Pro-tip:",
          },
          {
            type: "text",
            content:
              "A question to ask your patient might be, “Can you climb a flight of stairs without stopping or becoming short of breath?” (Refer to the table below for examples of daily activities and their METs):",
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Obstructive Sleep Apnea Screening",
          },
          {
            type: "text",
            content:
              "Every patient should be screened for obstructive sleep apnea (OSA) using the STOP-BANG questionnaire:",
          },
          {
            type: "text",
            content: "• Snoring - Do you snore loudly?",
          },
          {
            type: "text",
            content:
              "• Tired - Do you often feel tired, fatigued, or sleepy during the daytime (e.g., falling asleep while driving or talking to someone)?",
          },
          {
            type: "text",
            content:
              "• Observed - Has anyone observed you stop breathing or choking / gasping during your sleep?",
          },
          {
            type: "text",
            content:
              "• Pressure - Do you have or are being treated for high blood pressure?",
          },
          {
            type: "text",
            content: "• Body Mass Index more than 35 kg/m2?",
          },
          {
            type: "text",
            content: "• Age older than 50 years?",
          },
          {
            type: "text",
            content:
              "• Neck size large (measured around the Adam's apple) - For male, is your shirt collar 43 cm / 17 inches or greater? For female, is your shirt collar 41 cm / 16 inches or greater?",
          },
          {
            type: "text",
            content: "• Gender - Male?",
          },
          {
            type: "text",
            content: 'Award 1 point for each question answered as "yes".',
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "Obstructive Sleep Apnea Screening",
          },
          {
            type: "text",
            content: "Score 0-2: Low risk of OSA",
          },
          {
            type: "text",
            content: "Score 3-4: Intermediate risk of OSA",
          },
          {
            type: "text",
            content: "Score 5-8: High risk of OSA",
          },
          {
            type: "text",
            content:
              "Patients at high risk of OSA require an extended stay in the post-anesthetic care unit for SpO2 monitoring and may need to be observed in a high acuity unit / monitored setting overnight after major surgery or surgery involving the airway or surrounding structures.",
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Back to the case...",
          },
          {
            type: "text",
            content:
              "After reading through the chart and speaking to Johnny, you learn that he was a previously healthy 22 year old. One day ago, he developed vague abdominal discomfort, which has become sharp in nature and localized to the right lower quadrant of his abdomen. He has some nausea but has not vomited.",
          },
          {
            type: "text",
            content:
              "Johnny has never had surgery before or undergone any form of anesthetic. He is not aware of anyone in his family ever having problems with anesthetics.",
          },
          {
            type: "text",
            content:
              "He does not take any medications or over-the-counter products. He does not smoke cigarettes or use any recreational drugs. He drinks 1 to 2 beers on weekends. He does not have any allergies to drugs, tapes, or latex.",
          },
          {
            type: "text",
            content:
              "Johnny last ate about 8 hours ago – he had some chicken noodle soup. Review of systems is otherwise unremarkable.",
          },
          {
            type: "text",
            content: "You are now ready to move on to your physical exam!",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "Back to the case...",
          },
          {
            type: "text",
            content:
              "Johnny appears his stated age with a normal body habitus. He is somewhat diaphoretic. His vital signs are SpO2 98% on room air, RR 18/min, HR 90/min, BP 105/70 mmHg, and temperature 39 degrees Celsius. He is 1.75 m tall and weighs 72 kg. His body mass index is calculated to be 23.5 kg/m2.",
          },
          {
            type: "text",
            content:
              "On airway exam, you notice Johnny has a thick beard. When you ask him to open his mouth, the inter-incisor distance is greater than 2 finger breadths. He has no dentures or loose teeth. You grade the view of his airway as Mallampati class II. He is able to protrude his jaw when he bites his upper lip. The thyromental distance is equal to 3 finger breadths. His ability to extend his neck is within normal range.",
          },
          {
            type: "text",
            content:
              "Cardiac and respiratory exams were both normal. He is guarding his abdomen and does not like the bed to be shaken.",
          },
          {
            type: "text",
            content:
              "Lastly, you notice that he has a single pink (20-gauge) peripheral IV catheter in his left hand.",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Classification Image",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/1.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/2.png"),
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Catheters Image",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/3.png"),
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Predictors of Difficult Bag-Mask Ventilation",
          },
          {
            type: "text",
            content:
              "Bag-mask ventilation (BMV) is one of the most useful skills in airway management. Certain factors preclude forming a good seal between the mask and face. The following acronym (BONES) is helpful for identifying patients who may be difficult to bag-mask ventilate:",
          },
          {
            type: "text",
            content: "• Beard",
          },
          {
            type: "text",
            content: "• Obese",
          },
          {
            type: "text",
            content: "• No teeth",
          },
          {
            type: "text",
            content: "• Elderly",
          },
          {
            type: "text",
            content: "• Snoring / Stiffness of the lungs or chest wall",
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "ASA Physical Status Classification System",
          },
          {
            type: "text",
            content:
              "The American Society of Anesthesiologists (ASA) physical status classification system was introduced in 1941 to provide a uniform assessment of a patient’s preoperative physical condition.",
          },
          {
            type: "text",
            content:
              "It DOES NOT predict perioperative outcome per se, although there is an assumption that ASA class I patients have a lower perioperative risk of mortality and morbidity than patients with higher class patients.",
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "ASA PS Classification",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/4.png"),
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "header",
            content: "Summary of the Case",
          },
          {
            type: "text",
            content:
              "As a keen and astute medical student, you present your assessment to the staff:",
          },
          {
            type: "text",
            content:
              "“Johnny is a 22 year old male, who is booked for an emergency laparoscopic appendectomy. He presented to the ED after 1 day of acute RLQ pain and nausea.",
          },
          {
            type: "text",
            content:
              "He has never had surgery before or undergone a general anesthetic. To the best of his knowledge, there is no family history of adverse reactions to anesthesia.",
          },
          {
            type: "text",
            content:
              "He was previously healthy and takes no regular prescribed or over-the-counter medications. He has no known allergies. He does not smoke or use recreational drugs, and drinks minimally.",
          },
          {
            type: "text",
            content:
              "On review of systems, Johnny has not eaten anything for 8 hours due to nausea. He reports excellent exercise tolerance and is a hockey player. He denies any symptoms of chest pain or dyspnea. He does not experience reflux and he is at a low risk for OSA.",
          },
          {
            type: "text",
            content:
              "On exam, Johnny looks unwell, is febrile, but his vital signs are otherwise stable: O2 sat 98% on room air, resp rate 18, heart rate 90, and BP 105/70. Other than a bushy beard, he does not have any other predictors for difficult BMV. His airway is also reassuring with a normal mouth opening, thyromental distance, Mallampati II airway and normal neck extension. Lastly, he has one 20-gauge IV running well in his left hand.”",
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "header",
            content: "Anesthetic plan",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/5.png"),
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Anesthetic Plan Suggestion",
          },
          {
            type: "text",
            content:
              "“Because this procedure is performed laparoscopically, he will require a general anesthetic with an endotracheal tube. Direct laryngoscopy would be preferred, but we will have a video laryngoscope for backup.",
          },
          {
            type: "text",
            content:
              "His IV in-situ is running well and adequate for such a short procedure. Invasive BP monitoring is not necessary since the patient is normally healthy, currently hemodynamically stable, and expected blood loss is minimal.",
          },
          {
            type: "text",
            content:
              "Lastly, the patient needs adequate PONV prophylaxis and pain management.”",
          },
          {
            type: "text",
            content:
              "Later that day, Johnny undergoes an uncomplicated procedure and tolerates the anesthetic well. He wakes up complaining of minimal pain at the incision site and no nausea. Job well done!",
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #1",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/6.png"),
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #1 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/7.png"),
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #2",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/8.png"),
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #2 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/9.png"),
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #3",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/10.png"),
          },
        ],
      },
      {
        id: "36",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #3 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/11.png"),
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #4",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/12.png"),
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #4 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/13.png"),
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #5",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/14.png"),
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #5 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/15.png"),
          },
        ],
      },
      {
        id: "41",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #6",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/16.png"),
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #6 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/17.png"),
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #7",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/18.png"),
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #7 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/19.png"),
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #8",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/20.png"),
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "header",
            content: "Test Your Knowledge #8 (Answer)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/21.png"),
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "header",
            content: "Credits",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/1/22.png"),
          },
        ],
      },
      // add more slides here
    ],
  },
  {
    id: "2",
    title: "Airway Management",
    imageUrl: require("@/assets/images/modules/icon/2.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 2: Airway Management",
          },
          {
            type: "text",
            content:
              "Airway management is essential to safe anesthetic care. In this module we will review airway anatomy, assessment, and management.",
          },
        ],
      },
      {
        id: "2",
        content: [
          { type: "header", content: "Objectives" },
          {
            type: "text",
            content: "1. Describe the anatomy of the upper airway.",
          },
          {
            type: "text",
            content:
              "2. Describe the assessment of the airway and how different clinical findings suggest whether bag-mask ventilation or endotracheal intubation will be easy or difficult.",
          },
          {
            type: "text",
            content:
              "3. Explain why the ability to ventilate a patient is MORE IMPORTANT than the ability to intubate a patient's trachea.",
          },
          {
            type: "text",
            content: "4. List the indications for endotracheal intubation.",
          },
          {
            type: "text",
            content:
              "5. Outline the differences between a 'normal' intubation and a rapid sequence intubation.",
          },
          {
            type: "text",
            content:
              "6. Outline the important steps of a rapid sequence intubation.",
          },
        ],
      },
      {
        id: "3",
        content: [
          { type: "header", content: "For more learning please refer to:" },
          {
            type: "text",
            content:
              "1. Sullivan P, Farrell A. Chapter 6. Intubation and anatomy of the airway.",
          },
          {
            type: "text",
            content:
              "2. O’Connor T, Charapov I. Chapter 7. Intubation decisions and challenges.",
          },
          {
            type: "text",
            content:
              "3. Sullivan P, Birdi T, Jeyaraj LM. Chapter 8. The laryngeal mask airway device (LMAD).",
          },
          {
            type: "text",
            content:
              "4. Mercer C, Sullivan P. Chapter 9. Rapid sequence induction.",
          },
        ],
      },
      {
        id: "4",
        content: [
          { type: "header", content: "Credits" },
          { type: "text", content: "Created by: Krzysztof Dobosz, MD" },
          {
            type: "text",
            content:
              "Edited by: Alan Tung MD, Brian Merriman MD MSc FRCPC, Peter Choi MD MSc FRCPC",
          },
          {
            type: "text",
            content:
              "Adapted from work by: Oliver Applegarth MD MEd FRCPC, Siu-Kae Yeong MD, Michael Chuang MD FRCPC",
          },
        ],
      },
      {
        id: "5",
        content: [
          {
            type: "header",
            content:
              "Case Introduction: We'll start with a case to illustrate some of these points.",
          },
          {
            type: "text",
            content:
              "Mrs. Jones is an 80 year-old female booked for an elective laparoscopic cholecystectomy. You are a third-year medical student, and you arrive at the operating room early to prepare for the case.",
          },
          {
            type: "text",
            content:
              'Prior to seeing Mrs. Jones in the pre-operative area, you prepare all the equipment you will require for the case. A commonly utilized mnemonic is MS MAIDS, which stands for: Machine check The automated portion of the machine check will test the airway circuit, bag, and ventilator any potential issues.  In addition, you will need to manually check any gas tanks and pipes connected to the anesthetic machine to ensure adequate pressures. Suction Monitors At a minimum, these will include the pulse oximeter, electrocardiogram, and non-invasive blood pressure monitor. Other monitors (e.g., neuromuscular stimulator, temperature probe, arterial line) may be used depending on the case / indications Airway equipment face masks to connect to the anesthetic circuit AND AMBU® bag-mask (as a backup) oropharyngeal / nasopharyngeal airways laryngeal mask airway (LMA) endotracheal tubes semi-rigid stylet (to enable shaping of the endotracheal tube, if needed) laryngoscope with Macintosh ("Mac") laryngeal blades syringe (for inflation of the LMA or the cuff of the endotracheal tube) Intravenous (IV) Flush out the air in IV line using isotonic crystalloid ("prime the IV") prepare a peripheral IV kit if you are inserting an peripheral IV catheter Drugs Although it is unlikely you will be preparing any medication without staff present, be aware of what drugs are commonly drawn up before the patient is brought in Special equipment - this varies depending on the case / indications, but some examples include gastric tube forced warm air blanket ("BAIR hugger") for active intraoperative warming Troop pillow for proper positioning of patients with obesity IV infusion pump.',
          },
          {
            type: "text",
            content:
              "Each anesthesiologist will have preferences in what equipment and medications they like prepared, so don’t be discouraged if they make alterations to what you’ve prepared and always ask them how they like to approach each case after you’ve presented your anesthetic plan.",
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "header",
            content: "Anatomy of the Upper Airway",
          },
          {
            type: "text",
            content:
              "While you are preparing for the case, you review the anatomy of the upper airway. The upper airway consists of the nasal and oral cavities, the pharynx, and (depending on what you read) the larynx and trachea.",
          },
          {
            type: "text",
            content:
              "The pharynx lies posterior to the nasal and oral cavities and consists of the nasopharynx, oropharynx, and the hypopharynx (also called the laryngopharynx). If you view the pharynx on the sagittal plane, you will see that it extends from the base of the skull to the cricoid cartilage.",
          },
          {
            type: "text",
            content:
              "The epiglottis lies superior to the opening of the larynx ('glottis') and originates anterior and superior to the larynx. The epiglottis covers the glottis during swallowing to prevent aspiration.",
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Anatomy of the Upper Airway (...cont)",
          },
          {
            type: "text",
            content:
              "The space between the base of the tongue and the epiglottis is the vallecula. This is the space where the laryngeal blade is placed during direct laryngoscopy.",
          },
          {
            type: "text",
            content:
              "The larynx consists of the laryngeal cartilage and a number of muscles. On surface anatomy, the laryngeal cartilage is the Adam's apple, with the hyoid bone felt superior to and the cricoid cartilage felt inferior to the laryngeal cartilage. The cricoid cartilage is the only fully circumferential cartilage in the airway and is used to occlude the esophagus ('to apply cricoid pressure') to decrease the risk of regurgitation of gastric contents during tracheal intubation.",
          },
          {
            type: "text",
            content:
              "During direct laryngoscopy, one may be able to see the glottis, bounded laterally by the vocal folds ('vocal cords'), anteriorly (and superiorly) by the epiglottis, and posteriorly by corniculate and cuneiform cartilages.",
          },
          {
            type: "text",
            content:
              "In adults, the narrowest part of the upper airway is the glottis. In children, the narrowest part of the upper airway is the cricoid cartilage.",
          },
          {
            type: "text",
            content:
              "Ref. https://www.openanesthesia.org/upper-airway-anatomy/",
          },
          {
            type: "text",
            content:
              "Image from https://www.openanesthesia.org/upper-airway-anatomy/",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/1.png"),
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content: "Innervation of the Upper Airway",
          },
          {
            type: "text",
            content:
              "The innervation of the upper airway derives from four cranial nerves (CN): trigeminal (V), glossopharyngeal (IX), vagal (X), and hypoglossal (XII).",
          },
          {
            type: "text",
            content: "Table. Innervation of the upper airway",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/2.png"),
          },
        ],
      },
      {
        id: "9",
        content: [
          { type: "header", content: "Tracheal Intubation" },
          {
            type: "text",
            content:
              "What are the criteria for tracheal intubation and mechanical ventilation? You quickly review the criteria for tracheal intubation and mechanical ventilation, which can be subdivided into objective and subjective criteria.",
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content:
              "Table. Objective and Subjective Criteria for Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "Adapted from Tables 7.1 and 7.2 of O'Connor T, Charapov I. Intubation decisions and challenges. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/3.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/4.png"),
          },
          {
            type: "text",
            content:
              "A useful mnemonic to remember indications for tracheal intubation is the 5 Ps:",
          },
          {
            type: "text",
            content: "• Patency",
          },
          {
            type: "text",
            content: "• Protection (from aspiration)",
          },
          {
            type: "text",
            content:
              "• Positive pressure ventilation (inadequate oxygenation, ventilation, or mechanics of breathing or during general anesthesia)",
          },
          {
            type: "text",
            content: "• Pulmonary toilet",
          },
          {
            type: "text",
            content:
              "• Paralysis (from spinal cord injury or during general anesthesia)",
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "Airway Assessment - History",
          },
          {
            type: "text",
            content:
              "You go to assess Mrs. Jones. What questions would you ask Mrs. Jones to help you determine an airway management plan?",
          },
          {
            type: "text",
            content: "1. Risk of aspiration:",
          },
          {
            type: "text",
            content: "• Changes in the voice",
          },
          {
            type: "text",
            content: "• History of vocal cord polyps",
          },
          {
            type: "text",
            content: "• History of recurrent pneumonia",
          },
          {
            type: "text",
            content:
              "• Conditions associated with delayed gastric emptying (e.g., acute trauma, pregnancy / immediate post-partum, diabetes mellitus, Parkinson’s disease)",
          },
          {
            type: "text",
            content:
              "2. Potential difficult bag-mask ventilation or difficult direct laryngoscopy:",
          },
          {
            type: "text",
            content:
              "• History of difficult bag-mask ventilation or difficult direct laryngoscopy",
          },
          {
            type: "text",
            content: "• Previous surgery on or around the airway",
          },
          {
            type: "text",
            content: "• History of radiation therapy to the head or neck",
          },
          {
            type: "text",
            content:
              "3. Symptoms of obstructive sleep apnea - see STOP-BANG questionnaire*",
          },
          {
            type: "text",
            content:
              "* This was covered in Anesthesiology Learning Module 1: Preoperative Assessment. Please go back to this module if you wish to review this.",
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "Airway Assessment - Physical Examination",
          },
          {
            type: "text",
            content:
              "You proceed to assess Mrs. Jones's airway. You ask her to sit up with her head in neutral position as you do the following:",
          },
          {
            type: "text",
            content: "1. Assess the temporomandibular joint (TMJ):",
          },
          {
            type: "text",
            content:
              "• Ask the patient to open the mouth as wide as possible. The space between the TMJ condyle and the tragus of the ear should be 1 fingerbreadth (~1 cm).",
          },
          {
            type: "text",
            content: "2. Assess mouth opening and pharyngeal structures:",
          },
          {
            type: "text",
            content:
              "• With the mouth wide open, measure the distance between the upper and lower incisors (or the gums if edentulous). Be concerned if the opening is less than 2 fingerbreadths (or < 4 cm). Normal mouth opening is 3 fingerbreadths (6.5 cm).",
          },
          {
            type: "text",
            content:
              "• Ask the patient to protrude the tongue as far out as possible without phonation. Score the pharyngeal view using the modified Mallampati classification (see below).",
          },
          {
            type: "text",
            content:
              "3. Assess the thyromental distance and mandibular protrusion:",
          },
          {
            type: "text",
            content:
              "• Ask the patient to maximally extend the neck. Measure the distance between the inferior edge of the mandible at the chin (mentum) to the superior border (notch) of the thyroid cartilage. This is the thyromental distance (TMD) and should be at least 3 fingerbreadths (6.5 cm). Be concerned if this is less.",
          },
          {
            type: "text",
            content:
              "• With the head in neutral position again, ask the patient to protrude the mandible as far as possible. ('Stick your jaw out as far as possible as if you're trying to bite your upper lip.'). Be concerned if the patient's lower incisors barely reaches or does not reach the upper lip.",
          },
          {
            type: "text",
            content: "4. Assess the range of motion of the cervical spine:",
          },
          {
            type: "text",
            content:
              "• Ask the patient to flex and extend the neck to determine range of motion and absence or presence of pain.",
          },
          {
            type: "text",
            content: "5. Assess the lower airway:",
          },
          {
            type: "text",
            content:
              "• Inspect the area for scars suggesting previous surgery or tracheostomy. Assess the ease of palpation and mobility of the laryngeal and cricoid cartilages and the trachea.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content:
              "Modified Mallampati Classification of Oropharyngeal Structures",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/5.png"),
          },
          {
            type: "text",
            content:
              "To classify the view, ask the patient to sit upright with head in neutral position. Patient's mouth should be opened as wide as possible and the tongue protruded as far as possible.",
          },
          {
            type: "text",
            content:
              "• Class I - soft palate, uvula, tonsilar bed, and tongue are visible.",
          },
          {
            type: "text",
            content:
              "• Class II - soft palate, portion of uvula, and tongue are visible.",
          },
          {
            type: "text",
            content: "• Class III - only soft palate and tongue are visible.",
          },
          {
            type: "text",
            content: "• Class IV - only tongue is visible.",
          },
          {
            type: "text",
            content:
              "Ref. Samsoon G, Young J. Difficult tracheal intubation: A retrospective study. Anaesthesia 1987; 42(5):487-90.",
          },
          {
            type: "text",
            content:
              "Image by Jmarchn - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=12842847",
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "header",
            content: "Non-Reassuring Airway",
          },
          {
            type: "text",
            content:
              "Various clinical findings will raise suspicion of difficulties with bag-mask ventilation or direct laryngoscopy. The term 'non-reassuring airway' describes such situations, which can be as frequent as 1 in 266 patients (0.38%).*",
          },
          {
            type: "text",
            content:
              "1. For difficult bag-mask ventilation, remember the mnemonic BONES†",
          },
          {
            type: "text",
            content: "• Beard",
          },
          {
            type: "text",
            content: "• Obese",
          },
          {
            type: "text",
            content: "• No teeth",
          },
          {
            type: "text",
            content: "• Elderly",
          },
          {
            type: "text",
            content: "• Snoring / Stiffness of lungs or chest wall",
          },
          {
            type: "text",
            content:
              "2. For difficult direct laryngoscopy, remember the mnemonic LEMON:",
          },
          {
            type: "text",
            content: "• Look externally - obese, short thick neck",
          },
          {
            type: "text",
            content:
              "• Evaluate 3-2-1 rule - be concerned if thyromental distance < 3 fingerbreadths, mouth opening < 2 fingerbreadths, space between ear and TMJ < 1 fingerbreadth",
          },
          {
            type: "text",
            content: "• Mallampati class III or IV",
          },
          {
            type: "text",
            content:
              "• Obstruction - stridor, foreign body, or other causes of upper airway obstruction",
          },
          {
            type: "text",
            content:
              "• Neck mobility - limitation or contraindicated (e.g., unstable cervical spine in cervical collar)",
          },
          {
            type: "text",
            content:
              "* Kheterpal S, Martin L, Shanks AM, et al. Prediction and outcomes of impossible mask ventilation: a review of 50,000 anesthetics. Anesthesiology 2009; 110:891-7.",
          },
          {
            type: "text",
            content:
              "† Sullivan P, Farrell A. Chapter 6. Intubation and anatomy of the airway. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "The preoperative assessment of Mrs. Jones is unremarkable.",
          },
          {
            type: "text",
            content:
              "She drinks 1-2 glasses of wine weekly, doesn’t smoke, has no allergies, and only uses acetaminophen occasionally. She has no other health problems aside from cholelithiasis.",
          },
          {
            type: "text",
            content:
              "Vital signs are normal. She has a Mallampati class I pharyngeal view and normal thyromental distance. Her dentition is normal. Her cervical spine range of motion is normal. Cardiac and respiratory exams are normal.",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "Induction of Anesthesia",
          },
          {
            type: "text",
            content:
              "Mrs. Jones comes into the OR and you and the OR team complete the briefing on the surgical pre-operative checklist. You position Mrs. Jones on the OR bed and apply monitors (pulse oximeter, non-invasive blood pressure cuff, and electrocardiogram).",
          },
          {
            type: "text",
            content:
              "You ask Mrs. Jones to breathe 100% oxygen through the bag-valve mask. Mrs. Jones has a functioning IV, and you have taken a baseline blood pressure and have made note of her oxygen saturation (SpO2), respiratory rate (RR), end-tidal carbon dioxide (ETCO2), heart rate (HR), and ECG waveform.",
          },
          {
            type: "text",
            content:
              "Prior to induction, you review the airway equipment you have available.",
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content: "Preoxygenation",
          },
          {
            type: "text",
            content:
              "The goals of preoxygenation are to remove nitrogen from the lungs, maximize the oxygen content of the lungs, and delay oxygen desaturation after anesthetic induction.",
          },
          {
            type: "text",
            content:
              "Most of atmospheric air is composed of nitrogen so most of the volume of air in the lungs is nitrogen. Oxygen only makes up 20% of the volume in the lungs. Preoxygenation with 100% oxygen replaces the nitrogen with oxygen and allows the lungs to act as an oxygen reservoir, increasing the total volume of oxygen.",
          },
          {
            type: "text",
            content:
              "Preoxygenation should occur almost entirely before induction as optimal conditions for tracheal intubation following induction include an end-tidal O2 of 90% or higher. In some patients it is difficult to achieve end-tidal O2 > 75% before anesthetic induction; therefore, bag-mask ventilation with 100% oxygen is performed following induction to maintain or achieve an adequate end-tidal O2 level.",
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Airway Management",
          },
          {
            type: "text",
            content: "In the following slides, we will go over:",
          },
          {
            type: "text",
            content: "• Bag-mask ventilation (BMV)",
          },
          {
            type: "text",
            content: "• Oropharyngeal and nasopharyngeal airways",
          },
          {
            type: "text",
            content: "• Laryngeal mask airways (LMA)",
          },
          {
            type: "text",
            content: "• Endotracheal tubes",
          },
          {
            type: "text",
            content: "• Laryngoscopes and video laryngoscopes",
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Bag Mask Ventilation",
          },
          {
            type: "text",
            content:
              "Bag-mask ventilation (BMV) is a critical skill in anesthesiology and resuscitation.* Effective BMV requires an adequate mask seal, and a patent airway maintained through a proper head tilt and/or chin lift.",
          },
          {
            type: "text",
            content:
              "This is done by gently extending the patient’s neck, and lifting the mentum and mandible anteriorly. Often BMV is successfully completed by one hand (left) while the other is providing ventilation by squeezing the bag with the other hand (right).",
          },
          {
            type: "text",
            content:
              "The mask should be held by the thumb and the index finger tightly over the face. The middle finger should support the mentum, while the ring and/or pinky fingers support and lift the angle of the mandible.",
          },
          {
            type: "text",
            content:
              "* This skill is assessed in a workplace-based assessment during your anesthesiology rotation. You are expected to be competent in this skill by the time you graduate from medical school.",
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "One-Handed Bag-Mask Ventilation Technique",
          },
          {
            type: "text",
            content:
              "The 'EC clamp technique' is used to achieve a proper seal in bag-mask ventilation. This technique is demonstrated in the image, which, although showing a child, is equally applicable to adults.",
          },
          {
            type: "text",
            content:
              "The middle finger supports the mentum, while the ring and/or pinky fingers lift the angle of the mandible, forming an 'E' shape. The thumb and index finger form a 'C' to maintain a seal between the mask and face.",
          },
          {
            type: "text",
            content:
              "This technique is essential in both pediatric and adult airway management for effective ventilation and is commonly known as the EC clamp technique.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/6.png"),
          },
          {
            type: "text",
            content:
              "Source: Berg MD, Schexnayder SM, Chameides L, et al. Pediatric basic life support: 2010 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Pediatrics 2010; 126(5):S862-75.",
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Oropharyngeal and Nasopharyngeal Airways",
          },
          {
            type: "text",
            content:
              "Following anesthetic induction (and in other unconscious patients), the upper airway muscle tone decreases significantly, which can allow the tongue to fall back against the pharynx, obstruct the airway, and make bag-mask ventilation challenging. Airway obstruction can be relieved by manual maneuvers (chin lift, jaw thrust) and / or placement of an oropharyngeal or nasopharyngeal airways.",
          },
          {
            type: "text",
            content:
              "Oropharyngeal airways (also called oral or Guedel airways) stimulate the gag reflex so they should be inserted after loss of consciousness following anesthetic induction and removed before a patient regains consciousness.",
          },
          {
            type: "text",
            content:
              "In contrast, nasopharyngeal airways do not stimulate the gag reflex and are well-tolerated in awake or semi-conscious patients. They are best avoided in patients with anticoagulation or thrombocytopenia (due to increased risk of epistaxis) and in patients with mid-face or skull-base fractures.",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "Different sizes of oropharyngeal airways",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/7.png"),
          },
          {
            type: "text",
            content: "Image by Rama - Own work, CCA-SA 2.0",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Nasopharyngeal airway",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/8.png"),
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Supraglottic Airway Devices",
          },
          {
            type: "text",
            content: "Laryngeal Mask Airway (LMA™)",
          },
          {
            type: "text",
            content:
              "The laryngeal mask airway is an airway device that is positioned around the glottis to allow ventilation, typically at low airway pressures. It is also utilized as a rescue device in the difficult airway algorithm when you are unable to intubate or bag-mask-ventilate the patient.",
          },
          {
            type: "text",
            content:
              "The appropriate size for a laryngeal mask airway is based on the patient's weight: < 5 kg (size 1); 5 - 10 kg (size 1.5); 10 - 20 kg (size 2); 20 - 30 kg (size 2.5); 30 - 50 kg (size 3); 50 - 70 kg (size 4); 70 - 100 kg (size 5); and > 100 kg (size 6).",
          },
          {
            type: "text",
            content:
              "The laryngeal mask airway protects the glottis from pharyngeal secretions but does not protect against gastric regurgitation; therefore, it should not be used in patients at risk for gastric regurgitation (e.g., patients who have not fasted or have small bowel obstruction, obesity) if tracheal intubation can be achieved.",
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Laryngeal Mask Airways (LMA™): Overview",
          },

          {
            type: "text",
            content:
              "Table. Contraindications, Advantages, and Disadvantages of Laryngeal Mask Airways",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/9.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/10.png"),
          },
          {
            type: "text",
            content:
              "The technique for inserting the LMA is described in the reference.*",
          },
          {
            type: "text",
            content:
              "* Ref. Sullivan P, Birdi T, Jeyaraj LM. Chapter 8. The laryngeal mask airway device (LMAD). In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/11.png"),
          },
          {
            type: "text",
            content:
              "Image by Dr. Chris Wheatley - Own work, CCA 3.0, https://en.wikipedia.org/wiki/File:Laryngeal_mask_100.jpg",
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "Endotracheal Tubes",
          },
          {
            type: "text",
            content:
              "The endotracheal tube (ETT) is the main device for securing and maintaining a patient’s airway for ventilation. The size of the ETT refers to the internal diameter (in mm). Endotracheal tubes are inserted into the trachea, usually under direct or indirect (video) view of the larynx ('laryngoscopy') and vocal cords.",
          },
          {
            type: "text",
            content:
              "For adults, ETTs with a distal cuff ('cuffed' ETT) are used to prevent tracheal or pulmonary aspiration by inserting the cuff beyond the vocal cords. Adult cuffed ETT sizes range from 6.5 to 9 mm. The usual sizes are 7 to 7.5 mm for women and 8 to 8.5 mm for men.",
          },
          {
            type: "text",
            content:
              "For children, ETTs may or may not have a distal cuff due to concerns that pressure from an inflated cuff can cause tracheal mucosal pressure necrosis and result in softening of the still-developing tracheal tissue (tracheomalacia) as a complication. Uncuffed ETTs may be less likely to cause tracheomalacia and allow the use of a slightly larger size (due to absence of a cuff) but do not prevent aspiration.",
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "Pediatric Endotracheal Tube Sizing",
          },
          {
            type: "text",
            content:
              "Selecting an appropriately sized endotracheal tube is an important aspect of pediatric anesthesia. The size of tube changes significantly with the size and age of the child.",
          },
          {
            type: "text",
            content:
              "The table below summarizes appropriate endotracheal tube size selection by age in children:",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/12.png"),
          },
          {
            type: "text",
            content:
              "During tracheal intubation, a malleable semi-rigid stylet can be inserted into the ETT to provide some rigidity and facilitate entry into the glottis if needed.",
          },
          {
            type: "text",
            content: "Figure. Cuffed endotracheal tube",
          },
          {
            type: "text",
            content:
              "This is an 8.0 mm endotracheal tube, which is usually used in adult males. The distal cuff (on the left side of the tube) is inflated with air. (In clinical practice, the amount of air required to achieve a seal is a lot smaller than depicted here.) The broad black line shows the approximate location for the vocal cords. The proximal blue cuff (attached to the syringe) has a one-way valve to prevent leakage of air out of the distal cuff.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/13.png"),
          },
          {
            type: "text",
            content:
              "Image by Bigomar2 - Own work, CCA-SA 2.5, https://commons.wikimedia.org/wiki/File:Sondeintubation.jpg",
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "header",
            content: "Laryngoscopy",
          },
          {
            type: "text",
            content:
              "Insertion of the endotracheal tube is usually performed under direct vision using a laryngoscope (direct laryngoscopy) or under indirect vision with a video laryngoscope (indirect laryngoscopy).",
          },
          {
            type: "text",
            content:
              "In some situations (e.g., awake tracheal intubation), visualization of the glottis may be accomplished using a fiberoptic bronchoscope.",
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "header",
            content: "Laryngoscopes",
          },
          {
            type: "text",
            content:
              "A laryngoscope consists of a handle, which houses the power source, and a blade, which contains the light source and is used to manipulate the tongue and pharyngeal tissues so the larynx can be seen. The laryngoscope should be held in the left hand due to the shape of the laryngeal blades.",
          },
          {
            type: "text",
            content:
              "The most commonly used blade is the curved Macintosh ('Mac') blade. The tip of the Macintosh blade is inserted into the vallecula during direct laryngoscopy. Less frequently used is the straight Miller blade. The tip of the Miller blade is inserted under the epiglottis during direct laryngoscopy.",
          },
          {
            type: "text",
            content:
              "Figure. Laryngoscope with different sizes of Macintosh laryngoscope blades",
          },
          {
            type: "text",
            content:
              "The blades shown are (from top to bottom) for large adults (size 4), small to normal adults (size 3), large children (size 2), small children (size 1), and neonates (size 0).",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/14.png"),
          },
          {
            type: "text",
            content:
              "Image by Sasata - Own work, CCA 3.0, https://en.wikipedia.org/wiki/File:Macintosh_Blades.jpg",
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Laryngoscope Handles with Miller Blades",
          },
          {
            type: "text",
            content:
              "Figure. Laryngoscope handles with different sizes of Miller laryngoscope blades",
          },
          {
            type: "text",
            content:
              "The blades shown are for the same populations as the ones in the above Figure. The narrow handle on the left is often used with the pediatric and neonatal blades in pediatric anesthesia. The handle in the middle is the one commonly used with adult blades.",
          },
          {
            type: "text",
            content:
              "The short handle on the right is often used with patients who do not have a lot of space between the mouth and the chest wall (e.g., morbid obesity, pregnancy), which necessitates a shorter handle to enable insertion of the laryngoscope into the mouth. This handle is commonly used in obstetric anesthesia.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/15.png"),
          },
          {
            type: "text",
            content:
              "Image by DiverDave - Own work, CCA 3.0, https://commons.wikimedia.org/wiki/File:Laryngoscopes-Miller_blades.JPG",
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Laryngoscopy - Video Laryngoscopes",
          },
          {
            type: "text",
            content:
              "Video laryngoscopes resemble regular laryngoscopes in shape but contain a digital camera on the blade. The larynx is indirectly viewed on a video screen. Video laryngoscopes are often used in situations where direct laryngoscopy may be difficult (e.g., in the presence of a cervical collar or a non-reassuring airway).",
          },
          {
            type: "text",
            content:
              "The original video laryngoscope, the GlideScope, was designed in Vancouver, Canada, by a surgeon, Dr. John Pacey, in 2001. Since then, there have been a number of other video laryngoscopes available.",
          },
          {
            type: "text",
            content:
              "Figure. The GlideScope showing an anesthetic machine on its screen",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/16.png"),
          },
          {
            type: "text",
            content:
              "Image by DiverDave - Own work, CCA-SA 3.0, https://commons.wikimedia.org/wiki/File:Laryngoscope-Glidescope_02.JPG",
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Having reviewed all your possible airway devices and chosen the endotracheal tube as the safest way in managing Mrs. Jones's airway, you prepare for tracheal intubation.",
          },
          {
            type: "text",
            content:
              "First, you confirm adequate preoxygenation with an end-tidal oxygen of 90%. Following anesthetic induction with a short-acting opioid, a hypnotic agent, and a non-depolarizing muscle relaxant, you ask Mrs. Jones whether she can open her eyes (she cannot) and check her eyelid reflex (absent).",
          },
          {
            type: "text",
            content:
              "Following loss of the eyelid reflex and noting decreased end-tidal carbon dioxide, you begin bag-mask ventilation. As you have some difficulty with ventilation, you insert an oropharyngeal airway to facilitate ventilation.",
          },
          {
            type: "text",
            content:
              "After waiting the required amount of time for muscle paralysis to take effect, and noting that the end-tidal oxygen is still 90%, you prepare for direct laryngoscopy and tracheal intubation.",
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "header",
            content:
              "How To Maximize Your First Attempt At Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "Have all your equipment prepared and checked beforehand. Know the airway anatomy and the steps involved in tracheal intubation.",
          },
          {
            type: "text",
            content:
              "Align the oral (OA), pharyngeal (PA), and laryngeal (LA) axes by positioning the patient in the 'sniffing' position (Figure C below). In this position, the lower portion of the neck is FLEXED and the upper neck (at the atlanto-occiptal joint) is EXTENDED. The external auditory meatus should align horizontally with the sternal notch.",
          },
          {
            type: "text",
            content:
              "In normal-sized individuals, this position is usually accomplished with the head on a pillow. In obese individuals, the thoracic spine needs to be flexed ('ramped') using multiple pillows (under the head and thorax) or a Troop pillow to achieve the sniffing position.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/17.png"),
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "header",
            content: "Opening the Mouth and Advancing the Laryngoscope",
          },
          {
            type: "text",
            content:
              "Open the mouth with either the two-finger scissor technique or by extension of the occiput, whichever you or your preceptor are most comfortable with.",
          },
          {
            type: "text",
            content:
              "Be gentle, cautious, and describe to your preceptor what you are seeing as you advance the laryngoscope (i.e., whether you see the epiglottis and a partial or entire view of the larynx). This will reaffirm the steps in your own mind and informs your preceptor of everything going on.",
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "header",
            content: "Revised Cormack-Lehane Grading System",
          },
          {
            type: "text",
            content:
              "Figure. Revised Cormack-Lehane grading system for direct laryngoscopy and clinical examples of each view",
          },
          {
            type: "text",
            content:
              "Grade 1 - full view of the glottis\nGrade 2a - partial view of the glottis\nGrade 2b - arytenoids / posterior vocal cords barely visible\nGrade 3 - only epiglottis visible\nGrade 4 - no view of epiglottis or glottis",
          },
          {
            type: "text",
            content:
              "Ref. Yentis SM, Lee DJH. Evaluation of an improved scoring system for the grading of direct laryngoscopy. Anaesthesia 1998; 53(5):1041-4.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/18.png"),
          },
          {
            type: "text",
            content:
              "All images from https://openairway.org/tag/cormack-lehane/",
          },
        ],
      },

      {
        id: "36",
        content: [
          {
            type: "header",
            content: "Cormack-Lehane Grade 1 view",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/19.png"),
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "header",
            content: "Cormack-Lehane Grade 2a view",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/20.png"),
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "header",
            content: "Cormack-Lehane Grade 2b view",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/21.png"),
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "header",
            content: "Cormack-Lehane Grade 3 view",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/22.png"),
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "header",
            content: "Cormack-Lehane Grade 4 view",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/23.png"),
          },
        ],
      },

      {
        id: "41",
        content: [
          {
            type: "header",
            content:
              "How To Maximize Your First Attempt At Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "As you advance the laryngoscope blade, do not tilt your wrist. Tilting your wrist upward increases your chance of injuring teeth, especially the upper incisors. Imagine your wrist is fixed with a rod straight through to your elbow and you are only able to move your entire forearm up and down. The forces used in direct laryngoscopy come from your upper arm, not your wrist or forearm.",
          },
          {
            type: "text",
            content:
              "Beware of injury to teeth from manipulation of the laryngoscope blade and injury to the tongue or lip from compression of those structures against teeth. If you are unable to get a Cormack-Lehane grade 1 laryngeal view, ask your assistant to push on the laryngeal cartilage by applying backward, upward, and rightward pressure (BURP) to (hopefully) move the vocal cords into your field of vision.",
          },
          {
            type: "text",
            content:
              "If you are using a cuffed tube, insert the tube until the entire tracheal cuff is past the vocal cords. Remember to inflate the tracheal cuff. Use a pressure gauge to ensure that the cuff pressure is neither too high nor too low. A good pressure range is 20 to 30 mmHg.",
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "header",
            content: "Confirming Endotracheal Tube Placement",
          },
          {
            type: "text",
            content:
              "Confirm proper placement of the endotracheal tube. Auscultate and manually ventilate the patient at the same time. Listen to the epigastrium first (to minimize the amount of gas insufflated into the stomach if the tube is in the esophagus). If you hear gurgling in the stomach with ventilation, stop, and perform direct laryngoscopy to reposition the tube.",
          },
          {
            type: "text",
            content:
              "If you hear no sounds in the stomach, next auscultate the left axilla. If you do not hear air entry, the tube is in the right mainstem bronchus. Slowly pull the tube back while listening to the left axilla until you hear breath sounds. Finally, auscultate the right axilla. If you do not hear air entry, the tube is in the left mainstem bronchus. (This is extremely rare.) Slowly pull the tube back while listening to the right axilla until you hear breath sounds.",
          },
          {
            type: "text",
            content:
              "Assuming the endotracheal tube is correctly placed, auscultation requires only three manual breaths for confirmation. By then, you will see presence of end-tidal carbon dioxide on the capnogram.",
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "header",
            content: "Rapid Sequence Induction",
          },
          {
            type: "text",
            content:
              "Rapid sequence induction (RSI) is used to induce anesthesia in patients who are at an increased risk of aspiration or oxygen desaturation and require airway management with an endotracheal tube. Normal anesthetic induction is a gradual process, titrating the drugs until amnesia, hypnosis, and loss of reflexes are achieved.",
          },
          {
            type: "text",
            content:
              "The key components of rapid sequence induction include: preoxygenation, rapid administration of intravenous induction medications without titration, application of cricoid pressure at the start of induction, and no bag-mask ventilation.",
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "header",
            content: "Categories for Increased Risk of Aspiration",
          },
          {
            type: "text",
            content:
              "Categories for increased risk of aspiration include:\n\nDecreased level of consciousness severe hypoxemia or hypercapnia acute brain injury drug overdose or alcohol intoxication\n\nImpaired airway reflexes local airway anesthesiamyopathies stroke affecting airway reflexes\n\nAbnormal anatomy Zenkers diverticulum esophageal stricture hiatal hernia\n\nDecreased lower esophageal tone/competence prolonged indwelling nasogastric tube advanced age pregnancy hiatal hernia\n\nIncreased intragastric pressure pregnancy obesity bowel obstruction\n\nDelayed gastric emptying pregnancy renal failure diabetes mellitus with gastroparesis drugs - opioids, anticholinergic agents",
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "header",
            content: "Relative Contraindications to Standard Induction",
          },
          {
            type: "text",
            content:
              "Relative contraindications to standard induction Include:\n\nInadequate fasting* - consumption of clear fluids within past 2 hours for adults or within past hour for children breast milk within past 4 hours for children solid food or non-clear fluids (including milk and formula) within past 6 hours\n\nTrauma\n\nPregnancy in the second or third trimester\n\nAcute abdomen (e.g., bowel obstruction, perforated viscus, appendicitis)\n\nPyloric stenosis\n\n* For guidelines for pediatric patients, see Thomas M, Morrison C, Newton R, et al. Consensus statement on clear fluids for elective pediatric general anesthesia. Pediatr Anesth 2018; 28(5):411-4. Available at: http://onlinelibrary.wiley.com/doi/10.1111/pan.13370",
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "header",
            content: "Technique for Rapid Sequence Induction",
          },
          {
            type: "text",
            content:
              "These are the changes from standard anesthetic induction:\n\nNo titration of anesthetic agents\n\nNo bag-mask ventilation to minimize gastric insufflation\n\nApplication of cricoid pressure by an assistant to decrease the risk of gastric regurgitation\n\nThe cricoid cartilage is the only fully circumferential cartilage in the airway\n\nDownward pressure (towards the back) on the cricoid cartilage will occlude the esophagus (assuming the esophagus is directly posterior to the trachea) and prevent regurgitation of contents in the lower esophagus or stomach\n\nProper application of cricoid pressure requires 30 Newtons of force (enough for the fingernails to blanch)\n\nUse of succinylcholine or supranormal doses of rocuronium to achieve rapid (~30 s post-injection) neuromuscular blockade",
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "header",
            content: "Steps for Rapid Sequence Induction",
          },
          {
            type: "text",
            content:
              "Ensure that all of your airway equipment and drugs are prepared. A stylet should be inserted into the endotracheal tube. The suction should be turned on and at the head of the bed. The intravenous fluid should be running at maximal rate and flowing well through the intravenous catheter.\n\nEnsure that all of the monitors (pulse oximeter, ECG, non-invasive BP cuff) are applied. If you plan to use rocuronium for muscle relaxation, ensure you have the neuromuscular monitor applied.\n\nEnsure your assistant knows the location of the cricoid cartilage and is ready to apply cricoid pressure.\n\nPreoxygenation - four vital capacity breaths or three minutes of tidal breathing on 100% oxygen to maximize the time before desaturation. Remember that the patient will be apneic without bag-mask ventilation for at least 30 s before you are able to intubate the trachea.\n\nDo not perform bag-mask ventilation. Instruct your assistant to apply sustained cricoid pressure as you start the induction.\n\nPre-calculate the dose of the hypnotic agent (e.g., propofol) and neuromuscular blocking agent (e.g., succinylcholine, rocuronium) and administer them rapidly.\n\nIf you administered succinylcholine, watch for motor fasciculations in your patient. Once they have stopped, the patient will ready for laryngoscopy.\n\nIf you administered rocuronium, turn on the neuromuscular monitor before you inject the drug and watch for the loss of 'train-of-four' response, when the patient will be ready for laryngoscopy.\n\nDo not perform bag-mask ventilation.\n\nPerform laryngoscopy and intubate the trachea.\n\nFollowing intubation, confirm placement of the endotracheal tube BEFORE instructing your assistant to release cricoid pressure.",
          },
        ],
      },
      {
        id: "48",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "You obtain a Cormack-Lehane grade 1 view of Mrs. Jones's larynx and successfully intubate the trachea with a 7-mm ('size 7') endotracheal tube. The anesthetic and surgery are uneventful; the surgeon succeeds in removing the gall bladder laparoscopically. As the surgical team is finishing the procedure, you start thinking about Mrs. Jones's emergence from anesthesia and tracheal extubation.",
          },
        ],
      },
      {
        id: "49",
        content: [
          {
            type: "header",
            content: "Extubation",
          },
          {
            type: "text",
            content:
              "Tracheal extubation is normally performed when the patient is awake and meet the extubation criteria (see below). Tracheal extubation should not occur during a 'light' plane of anesthesia (stage of excitation) as the risk of laryngospasm and bronchospasm is high during this stage.\n\nIn some instances, tracheal extubation can be performed during a 'deep' plane of anesthesia (stage of surgical anesthesia) if the risks of regurgitation and aspiration are low and the patient is spontaneously breathing with adequate tidal volumes.\n\nIn those instances, bag-mask ventilation is used to assist the patient after tracheal extubation until the patient is awake.",
          },
        ],
      },
      {
        id: "50",
        content: [
          {
            type: "header",
            content: "Assessing the Plane of Anesthesia for Extubation",
          },
          {
            type: "text",
            content:
              "The plane of anesthesia can be assessed by suctioning the patient's pharynx prior to tracheal extubation. If the patient opens their eyes and makes purposeful movements, they are awake.\n\nIf the patient is coughing or breath holding but not opening their eyes or making purposeful movements, they are likely in a light plane of anesthesia.\n\nIf there is no response they are still in a deep plane of anesthesia.",
          },
        ],
      },
      {
        id: "51",
        content: [
          {
            type: "header",
            content: "Suctioning and Extubation Criteria",
          },
          {
            type: "text",
            content:
              "Suctioning also removes any collected secretions or blood prior to extubation, reducing the risk of aspiration. Following extubation the patient should be administered 100% oxygen by face mask and breathing effort should be monitored.\n\nCriteria for tracheal extubation:\n\nPresence of gag and cough reflexes (to prevent aspiration and maintain tracheobronchial toilet)\n\nAdequate oxygenation - PaO2 at least 60 mmHg (SpO2 > 90%) with FiO2 < 50%\n\nRespiratory rate > 8 and < 35 breaths/min\n\nAdequate ventilation - PaCO2 < 50 mmHg\n\nVital capacity > 15 mL/kg\n\nTidal volume > 5 mL/kg",
          },
        ],
      },

      {
        id: "52",
        content: [
          {
            type: "header",
            content: "Complications of Laryngoscopy / Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "1. Airway trauma\n\nInstrumentation of airway tissues can be traumatizing, with issues ranging from a sore throat to tracheal stenosis. Trauma can due to the laryngoscopy as well as the amount of tracheal cuff pressure while the trachea is intubated. If tracheal cuff pressures are too high they can restrict blood flow to the trachea leading to ischemia, softening of the tracheal cartilage (in children), scarring, and potential stenosis. Cuff pressures can be measured using a manometer and should be 20 to 30 mmHg. Post-extubation edema of the glottis, larynx, or trachea can occur and is especially worrisome in children. This can occur with uncuffed tubes (if the size is too large) or cuffed tubes (if the size is too large or tracheal cuff pressures are too high).",
          },
        ],
      },
      {
        id: "53",
        content: [
          {
            type: "header",
            content: "Improper Positioning of the Tracheal Tube",
          },
          {
            type: "text",
            content:
              "2. Improper positioning of the tracheal tube\n\nIntubation of the esophagus, which results in failure to oxygenate or ventilate the lungs and leads to gastric distention and increased risk of gastric regurgitation and pulmonary aspiration. Esophageal intubation is an emergency that must be corrected immediately. Intubation of a mainstem bronchus can occur leading to single lung ventilation, atelectasis of the unventilated lung, and potential tension pneumothorax in the ventilated lung from excessive volume and pressure. Due to the anatomy of the mainstem bronchi, almost all bronchial intubations occur in the right mainstem bronchus. Not placing the tracheal tube far enough into the trachea can result in the tracheal cuff sitting in the larynx leading to laryngeal trauma.",
          },
        ],
      },
      {
        id: "54",
        content: [
          {
            type: "header",
            content: "Laryngospasm",
          },
          {
            type: "text",
            content:
              "3. Laryngospasm\n\nDefined as the forceful involuntary spasm of the laryngeal muscles secondary to stimulation of the superior laryngeal nerve resulting in adduction of the vocal cords and lack of gas flow into or out of the lungs, laryngospasm can be prevented by extubating the trachea when the patient is in a deep plane of anesthesia or is fully awake. (Laryngospasm can still occur with extubation in an awake patient but is rare.) The light plane of anesthesia is the period of greatest risk for laryngospasm if tracheal extubation occurs. Laryngospasm usually resolves with bag-mask ventilation and / or medications. Occasionally, tracheal re-intubaton is needed (since the vocal cords cannot adduct with the endotracheal tube in place between them).",
          },
        ],
      },
      {
        id: "55",
        content: [
          {
            type: "header",
            content: "Tracheal Tube Malfunction",
          },
          {
            type: "text",
            content:
              "4. Tracheal tube malfunction\n\nFollowing placement of the endotracheal tube, movement of the patient or the tube can result in kinks in the tube. Furthermore surgical instrumentation around the airway can lead to damage to the tube causing leaks or obstruction of the airway conduit. The airway conduit can also be obstructed by foreign body aspiration or the presence of thick secretions in the lumen.",
          },
        ],
      },
      {
        id: "56",
        content: [
          {
            type: "header",
            content: "Management of the Difficult Airway",
          },
          {
            type: "text",
            content:
              "The difficult airway algorithms, for standard and obstetrical patients respectively, are introduced in this module in order for you to have cursory awareness of how a difficult airway is approached. You are not expected to know all the details.",
          },
        ],
      },
      {
        id: "57",
        content: [
          {
            type: "header",
            content: "Key Points in Difficult Airway Management",
          },
          {
            type: "text",
            content:
              "The two key points to recognize are: Differentiate between the recognized difficult airway (a 'non-reassuring airway' identified based on history or physical exam) and the unrecognized difficult airway as there are more options for the former. Note that all pregnant patients in the second or third trimester are considered to have difficult airways due to physiological changes during pregnancy (which is why there is a separate algorithm for management of the airway of an obstetrical patient). Management decisions and the acuity of the situation is affected by the ability or inability to ventilate the patient. Patients who can be ventilated by bag-mask can be oxygenated and ventilated and allow time for securing the airway or emergence from anesthesia and resumption of spontaneous ventilation. Patients who cannot be ventilated ('cannot ventilate-cannot intubate' scenario) are crises that require rapid access to the trachea to avoid hypoxia and injury to organs.",
          },
        ],
      },
      {
        id: "58",
        content: [
          {
            type: "header",
            content: "Difficult airway algorithm",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/24.png"), // First image
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/25.png"), // Second image
          },
        ],
      },

      {
        id: "59",
        content: [
          {
            type: "header",
            content: "Master Algorithm",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/26.png"),
          },
        ],
      },
      {
        id: "60",
        content: [
          {
            type: "header",
            content: "Case Study 1",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/27.png"),
          },
        ],
      },
      {
        id: "61",
        content: [
          {
            type: "header",
            content: "Case Study 1 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/28.png"),
          },
        ],
      },
      {
        id: "62",
        content: [
          {
            type: "header",
            content: "Case Study 2",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/29.png"),
          },
        ],
      },
      {
        id: "63",
        content: [
          {
            type: "header",
            content: "Case Study 2 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/30.png"),
          },
        ],
      },
      {
        id: "64",
        content: [
          {
            type: "header",
            content: "Case Study 3",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/31.png"),
          },
        ],
      },
      {
        id: "65",
        content: [
          {
            type: "header",
            content: "Case Study 3 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/32.png"),
          },
        ],
      },
      {
        id: "66",
        content: [
          {
            type: "header",
            content: "Case Study 4",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/33.png"),
          },
        ],
      },
      {
        id: "67",
        content: [
          {
            type: "header",
            content: "Case Study 4 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/34.png"),
          },
        ],
      },
      {
        id: "68",
        content: [
          {
            type: "header",
            content: "Case Study 5",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/35.png"),
          },
        ],
      },
      {
        id: "69",
        content: [
          {
            type: "header",
            content: "Case Study 5 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/36.png"),
          },
        ],
      },
      {
        id: "70",
        content: [
          {
            type: "header",
            content: "Case Study 6",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/37.png"),
          },
        ],
      },
      {
        id: "71",
        content: [
          {
            type: "header",
            content: "Case Study 6 Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/2/38.png"),
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Hypoxia",
    imageUrl: require("@/assets/images/modules/icon/3.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 3: Hypoxia: A Clinical Approach",
          },
        ],
      },

      {
        id: "2",
        content: [
          {
            type: "header",
            content: "Objectives",
          },
          {
            type: "text",
            content:
              "1. Outline an approach to evaluating the patient with hypoxia\n\n2. Explain the following clinically relevant respiratory physiology concepts:\n   a. The relationship between oxygen saturation (SaO2) and arterial oxygen tension (PaO2)\n   b. Hypoxemia and hypoxia, including the difference between these two\n   c. The oxygen cascade\n   d. The alveolar-gas equation\n   e. The A-a gradient\n   f. Ventilation-perfusion (V/Q) mismatch and its etiology\n\n3. List and categorize factors leading to low arterial oxygen tension\n\n4. Describe the concepts for correcting ventilation-perfusion mismatch\n\n5. Describe basic oxygen therapy\n\n6. List objective and subjective criteria for intubation and mechanical ventilation",
          },
        ],
      },
      {
        id: "3",
        content: [
          {
            type: "header",
            content: "For Further Information",
          },
          {
            type: "text",
            content:
              "Textbook reading: Roberts A, Fraser A. Chapter 24. Hypoxemia and oxygen therapy. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.\n\nOther useful resources (for enrichment):\n\n1. Cooper D. Pulmonary physiology podcasts [enrichment material for MEDD 411]. Available at: https://entrada.med.ubc.ca/community/learningresources:virtual_patient_server/pulmonary_physiology [This is an excellent review of the pulmonary physiology that you were taught prior to clerkship.]\n\n2. West JB, Luks AM. West's Respiratory Physiology, 10th edition. Philadelphia: Wolters Kluwer, 2016. [This is an excellent, brief textbook for those of you who plan to pursue a career in anesthesiology, respirology, or critical care medicine.]",
          },
        ],
      },
      {
        id: "4",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Mr. Adam West is an 81-year-old heavy smoker who underwent an open cholecystectomy 2 days ago. He has a large right subcostal incision. He was initially doing well and receiving morphine for pain. The nurse was observing him and found his oxygen saturation (SaO2) to be 85% on room air. It's your last day on the surgery rotation and the nurse calls you for advice.\n\nAs you head towards the patient, you start reviewing your physiology.\n\nWhat is oxygen saturation? How is it measured?\nWhat is PaO2?\nCan you recall the relationship between the two?",
          },
        ],
      },

      {
        id: "5",
        content: [
          {
            type: "header",
            content: "Partial Oxygen",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/1.png"),
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "header",
            content: "Partial Oxygen Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/2.png"),
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Oxygen Saturation - 1",
          },
          {
            type: "text",
            content:
              "The oxygen saturation (SaO2) is the percentage of hemoglobin saturated with oxygen. Most of the oxygen carried in blood is attached to hemoglobin. Normal SaO2 for a healthy adult is about 95% to 100%; an oxygen saturation lower than 92% is usually a concern. Oxygen saturation is typically measured with a non-invasive pulse oximeter probe, usually attached to the finger, or sometimes an ear lobe. It gives a continuous readout of peripheral oxygen saturation.*",
          },
          {
            type: "text",
            content:
              "* Strictly speaking, the peripheral saturation measured by the pulse oximeter is denoted SpO2 in contrast to the arterial oxygen saturation (SaO2) measured from an arterial blood gas.",
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content: "Oxygen Saturation - 2",
          },
          {
            type: "text",
            content:
              "In contrast, PaO2 is the partial pressure of oxygen in arterial blood (also called the arterial oxygen tension) and represents the oxygen dissolved in the plasma of arterial blood. PaO2 is measured from an arterial blood gas. At a PaO2 of 60 mmHg, the SaO2 is 90% (please see the oxygen-hemoglobin dissociation curve coming up).\n\nBecause of the sigmoidal shape of the oxygen-hemoglobin dissociation curve, a drop in SaO2 below 90% results in a rapid drop in PaO2 (refer to curve).",
          },
        ],
      },
      {
        id: "9",
        content: [
          {
            type: "header",
            content: "Factors",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/3.png"),
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content: "Factors Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/4.png"),
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "The Oxygen-Hemoglobin Dissociation Curve",
          },
          {
            type: "text",
            content:
              "The factors that shift the oxygen-hemoglobin dissociation curve to the right are:\n\nIncreased acidity (decreased pH)\nIncreased arterial partial pressure of carbon dioxide (PaCO2)\nIncreased red cell 2,3-diphosphoglycerate (2,3-DPG)\nIncreased body temperature",
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "The Oxygen-Hemoglobin Dissociation Curve",
          },
          {
            type: "text",
            content:
              "A shift to the right represents a decreased affinity (binding) of oxygen to hemoglobin and favours unloading of oxygen to the peripheral tissues. A good way to remember this is to think of someone who is working hard during exercise. During exercise, there is heat production, increased production of carbon dioxide, increasing acidity (from lactate), and an increased demand for oxygen from the muscles. The rightward shift of the oxygen-hemoglobin dissociation curve enables greater unloading of oxygen to the muscles. States that increase red cell 2,3-DPG include chronic anemia and hyperthyroidism. Like exercise, an increased unloading of oxygen is needed during anemia and hyperthyroidism and there is a rightward shift of the oxygen-hemoglobin dissociation curve.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content: "The Oxygen-Hemoglobin Dissociation Curve Image",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/5.png"),
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "header",
            content: "Hypoxemia and Hypoxia",
          },
          {
            type: "text",
            content:
              "Hypoxemia refers to decreased partial pressure of oxygen in the arterial blood (also called decreased arterial oxygen tension and denoted as PaO2). The causes of hypoxemia (in order of frequency) are:\n\nVentilation-perfusion (V/Q) mismatch\nDecreased alveolar ventilation\nRight-to-left shunt\nDecreased diffusion across the alveolar-capillary membrane\nDecreased partial pressure of inspired oxygen (PiO2)\n\nHypoxia refers to low content of oxygen in the blood or cellular tissues.",
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content: "Effects of Hypoxia - 1",
          },
          {
            type: "text",
            content:
              "Which organ in the body is most sensitive to lack of oxygen? How do patients present when this organ is impaired?\n\nOxygen is vital to all organ functions. Inadequate PaO2 (hypoxemia) will lead to low tissue oxygen content (hypoxia). Oxygen content is determined by oxygen saturation (SaO2), hemoglobin concentration, and partial pressure of oxygen.\n\nThe brain is the organ that is most sensitive to lack of oxygen. With a decrease in oxygen partial pressure, brain function becomes impaired. Patients often present with confusion and agitation and become combative.* (Other important causes for this behavior are hypoglycemia and alcohol withdrawal.)",
          },
          {
            type: "text",
            content:
              "* As a physician you will be asked to provide sedation to patients who are agitated or combative. You must rule out hypoxia (decreased SaO2), hypercapnea (increased PaCO2), and other reversible causes before prescribing a sedative for these patients.",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "Effects of Hypoxia - 2",
          },
          {
            type: "text",
            content:
              "Additionally, if oxygen saturation dips low enough, you may witness cyanosis. This describes the bluish-purplish discolouration of the skin or mucous membranes that is a sign of hypoxemia. When reduced hemoglobin (deoxyhemoglobin) exceeds 5 g per 100 mL of blood, or oxygen saturation is 85% or lower, cyanosis can be physically evident. When oxygenation saturation is 75% (corresponding to a PaO2 of 40 mmHg), cyanosis is easily visible.\n\nThat being said, if the patient has anemia or has dark skin, it may be harder to see. A reliable site to assess for cyanosis is the inner lip.",
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery - 1",
          },
          {
            type: "text",
            content:
              "Oxygen delivery refers to the amount of oxygen delivered to the tissues. This is dependent on:\n\nthe amount of hemoglobin in the arterial blood\nthe oxygen saturation of the hemoglobin (SaO2)\nthe oxygen arterial tension of the blood (PaO2)\nthe amount of arterial blood delivered to the tissues (cardiac output)",
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery - 2",
          },
          {
            type: "text",
            content:
              "The first three factors determine the oxygen content in the arterial blood (CaO2), where\n\nCaO2 = (SaO2 x 1.34 Hb) + 0.003 PaO2*\n\nwhich is the sum of the amount of oxygen bound onto hemoglobin and the amount of oxygen dissolved in the plasma. The amount of oxygen delivered to the tissues (DO2) is the product of the total amount of oxygen in the arterial and the amount of arterial blood delivered to the tissues:\n\nDO2 = CaO2 x CO",
          },
          {
            type: "text",
            content:
              "* This equation is shown to help you understand the concept of oxygen content. You are NOT expected to memorize this equation for assessment purposes in this rotation. Also note that this equation uses the imperial unit (g/dL) for hemoglobin concentration instead of the metric unit (g/L) so you will need to convert the hemoglobin value to the former unit before calculating oxygen content.",
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery - 3",
          },
          {
            type: "text",
            content:
              "With inadequate PaO2 (and thus decreased SaO2 due to the relationship between PaO2 and SaO2 shown in the oxygen-hemoglobin dissociation curve), the cardiovascular system will try to compensate by increasing cardiac output. When the patient is unable to increase their cardiac output further, oxygen extraction from the blood will increase in the tissue, leading to a reduced mixed venous oxygen saturation (SvO2). A low SvO2 (normal is about 75%) will indicate a mismatch in oxygen supply and demand. Inadequate oxygenation of tissues also leads to increased anaerobic metabolism and lactate production (another marker of tissue hypoxia).",
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "The Oxygen Cascade",
          },
          {
            type: "text",
            content:
              "The oxygen cascade refers to the incremental decreases in oxygen partial pressure from ambient air to the tissues. Understanding the oxygen cascade will help you understand the clinical approach to treating hypoxia.\n\nAt 1 atmosphere, the inspired partial pressure of oxygen at the lips (PiO2) is about 160 mmHg.*\n\nAs the inspired oxygen travels down the upper airways, it is humidified with water and this causes a further drop in the PO2 to 150 mmHg.† This represents the first drop in the PO2 in the oxygen cascade.\n\nA larger drop occurs at the alveoli due to dilution with carbon dioxide resulting in a PAO2 of 100 mmHg on room air. The alveolar partial pressure of oxygen can be calculated using the alveolar gas equation.",
          },
          {
            type: "text",
            content:
              "* To calculate PiO2 remember that the partial pressure of a gas is the proportion of the gas in the entire volume, which is the atmosphere in this case. Barometric pressure (Pb) at sea level is 760 mmHg and inspired O2 (i.e., proportion of oxygen in the atmosphere, FiO2) is 21%. Therefore, PiO2 = Pb x FiO2 = 760 mmHg x 0.21 = 160 mmHg.",
          },
          {
            type: "text",
            content:
              "† This is because the total pressure of the inspired gases is now Pb - PH2O = 760 - 47 = 713 mmHg. PO2 is now 713 x 0.21 = 150 mmHg.",
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Alveolar Gas Equation",
          },
          {
            type: "text",
            content:
              "The alveolar gas equation is used to calculate the partial pressure of the oxygen at the alveoli and also gives the relationship between PAO2 and PaCO2.\n\nPAO2 = [(Pb - PH2O) FiO2] - [PaCO2 / R]\n\nwhere:\n\nPAO2 = alveolar partial pressure of oxygen\nPb = barometric pressure (760 mmHg at sea level)\nPH2O = water vapor pressure (usually 47 mmHg)\nFiO2 = inspired O2 (21% at room air)\nPaCO2 = arterial partial pressure of carbon dioxide\nR = respiratory quotient, which is the ratio of carbon dioxide production to oxygen consumption (VCO2 / VO2), and is usually 0.8 on a 'normal' diet",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "The Oxygen Cascade",
          },
          {
            type: "text",
            content:
              "There are further decreases in the oxygen partial pressure from the alveoli (PAO2) to the arterial blood (PaO2) due to dead space ventilation, rate of diffusion, and shunt. The decrease from PAO2 to PaO2 is called the A-a gradient (sometimes denoted as A-a DO2).\n\nThis A-a gradient is usually very small (< 15 mmHg in a healthy 40-year-old). It increases with age* and with conditions that increase dead space ventilation† (e.g., emphysema), limit diffusion‡ (e.g., pulmonary fibrosis), or increase shunt§ (congenital heart diseases with right-to-left shunts).",
          },
          {
            type: "text",
            content:
              "* A conservative upper limit of normal for the A-a gradient can be calculated using the formula (age / 4) + 4. You do not need to know this formula.",
          },
          {
            type: "text",
            content:
              "† Dead space consists of anatomic dead space (volume of the conducting airways, approximately 150 mL) and physiologic dead space (volume of gas that does not eliminate CO2). We are referring to the physiologic dead space.",
          },
          {
            type: "text",
            content:
              "‡ Rate of diffusion is described by Fick's equation, which states that rate of diffusion is directly proportional to the surface area of the alveoli and inversely proportional to the thickness of the alveolar membrane.",
          },
          {
            type: "text",
            content:
              "§ Shunt refers to arterial blood that has not passed through ventilated areas of the lungs. Physiologic shunt refers to the deoxygenated blood (from the Thebesian veins and bronchial circulation) that drain into the left ventricle. This deoxygenated blood decreases the oxygen saturation within the left ventricle. Pathologic shunts include intracardiac shunts that shunt blood from the right side of the heart to the left. The deoxygenated blood on the right side of the heart mixes with oxygenated blood from the left side of the heart to decrease oxygen saturation pumping out from the left ventricle. We are referring to pathologic shunts.",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/6.png"),
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/7.png"),
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Opioid Overdose",
          },
          {
            type: "text",
            content:
              "You immediately recognize the signs of opioid overdose.\n\nReview the case so far and review the alveolar gas equation. Think about what values in Mr. West have changed.\n\nPAO2 = [(Pb - PH2O) FiO2] - [PaCO2 / R]\n\nLook at the alveolar gas equation to give you the answer. Pb and PH2O have not changed. He is still on room air (21% O2). Due to excessive opioids, he is hypoventilating (as alveolar ventilation is the product of tidal volume and respiratory rate, Vt x RR), which results in carbon dioxide retention (accounting for his bounding pulses and will result in an increased PaCO2). The decreased PAO2 will result in a decreased PaO2 and tissue hypoxia.",
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "How Do We Improve Mr. West's Saturation?",
          },
          {
            type: "text",
            content:
              'The knee jerk response is to increase his FiO2. Looking at the alveolar gas equation we see that increasing FiO2 would in fact increase PAO2 temporarily; therefore PaO2 and SaO2 will increase. Everyone will be happy for awhile until you get another call to tell you Mr. West has "coded". Everyone will be surprised how "suddenly" that happened. "But Doctor his sats were ok till just a few minutes ago." What happened?\n\nIncreasing the FiO2 is only a temporary measure until you have corrected the real problem, in this case, hypoventilation. You have done nothing to decrease PaCO2. Mr. West\'s respiratory acidosis will progressively worsen and the correct treatment is to increase ventilation to remove carbon dioxide. To increase ventilation, you can give some naloxone (to antagonize the hypoventilatory effect of the opioid) and / or ventilate the patient with a bag-valve mask (also called an Artificial Mask-Bag Unit (AMBU®) bag and mask).',
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "How Do We Improve Mr. West's Saturation?",
          },
          {
            type: "text",
            content:
              "You treat Mr. West initially by assisting his ventilation using a bag-valve mask and administering naloxone, an opioid receptor antagonist. He wakes up and his SaO2 improves. You reduce the dose and frequency of his opioid and leave him on oxygen therapy.",
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "header",
            content: "AMBU bag and mask",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/8.png"),
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery Systems - 1",
          },
          {
            type: "text",
            content:
              "Oxygen can be delivered via the nose, mouth, or trachea and can be humidified. Some delivery systems will provide inspiratory or expiratory pressures.\n\nRegular nasal prongs are well tolerated if flow rates are less than 5-6 L/min. At higher flow rates, nasal mucosa will dry out and lead to patient discomfort. In general, regular nasal prongs can deliver almost 40% oxygen at 4 L/min flow rate. (To approximate the FiO2 for nasal prongs, multiply the flow rate by 4 and add 21%.) Newer high flow nasal prongs are designed to give up to 60-70 L/min of oxygen and can theoretically achieve FiO2 100%.",
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery Systems - 2",
          },
          {
            type: "text",
            content:
              "In contrast, simple face masks should not be used with flow rates less than 6 L/min as low flow rates can lead to rebreathing of carbon dioxide. For masks with a reservoir system (bag attached to the mask), unused oxygen is accumulated during exhalation and increases the amount available for the next breath. A non-rebreathing mask uses both a reservoir bag and one-way valves to prevent expired gases from re-entering the bag. Lastly, the puritan face mask delivers one of the highest amounts of humidified oxygen and should be used if FiO2 of 50% or higher is desired.\n\nContinuous positive airway pressure (CPAP) delivers continuous and constant pressure during inspiration and expiration. It is often used to prevent or reduce upper airway obstruction (e.g., in patients with obstructive sleep apnea). Bi-level positive airway pressure (BiPAP) differs in that it delivers increased pressure on inspiration and a lower constant pressure on expiration to help the patient achieve a desired tidal volume and reduce hypoventilation.",
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Oxygen Delivery Devices",
          },
          {
            type: "text",
            content:
              "Here are examples of different oxygen delivery systems available. Observe the possible oxygen flow rates and inspired oxygen concentrations that can be delivered with each system.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/9.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/10.png"),
          },
          {
            type: "text",
            content:
              "Images from: https://upload.wikimedia.org/wikipedia/commons/1/1b/Nasalprongs.JPG, https://commons.wikimedia.org/wiki/File:Simpleface.JPG, and https://commons.wikimedia.org/wiki/File:NRBer.JPG",
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "You decide to leave Mr. West with a simple face mask at 6 L/min (estimated FiO2 40%). You check on him frequently overnight and he seems to be doing well. His SaO2 is 96%. You order an arterial blood-gas and his PaCO2 is normal (40 mmHg).\n\nOn rounds the next morning his SaO2 has decreased again to 90% on 40% oxygen by mask.\n\nYou examine him carefully and observe the following:\n\nVital signs: SaO2 90%, RR 34 / min and laboured, HR 110 / min, BP 146/89 mmHg.\n\nRespiratory: He is using his accessory muscles and looks exhausted. Auscultation of his chest reveals decreased air entry and crackles to his right lower lung base.",
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/11.png"),
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "header",
            content: "Our Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/12.png"),
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "header",
            content: "Atelectasis",
          },
          {
            type: "text",
            content:
              "You confirmed your clinical diagnosis by ordering a chest X-ray, which shows collapse of the lower lobe of the right lung.\n\nRemember he is a heavy smoker, still has pain from his surgery, and every cough hurts him. He has trouble taking deep breaths and clearing secretions in his chest. His secretions have accumulated in his lungs and have finally plugged up the small airways leading to collapse of his right lower lobe.\n\nYou order another arterial blood gas and find his PaO2 is 60 mmHg. (Of course you could have guessed that because you know the relationship between SaO2 and PaO2 - remember his SaO2 was 90%). His PaCO2 is still normal (40 mmHg).\n\nBy looking at the alveolar gas equation, you can work out that his PAO2 should be much higher (235 mmHg). Remember you are giving 40% oxygen and the PaCO2 is normal. So if his PAO2 should be high, why is his PaO2 only 60 mmHg?",
          },
        ],
      },
      {
        id: "36",
        content: [
          {
            type: "header",
            content: "Ventilation-Perfusion (V/Q) Mismatch",
          },
          {
            type: "text",
            content:
              "If Mr. West's PAO2 should be high (235 mmHg), why is his PaO2 only 60 mmHg? Take a minute to review the case and think about the physiology.\n\nObviously there is a drop between his PAO2 and the PaO2. He has an increased A-a gradient of 175 mmHg. In Mr. West's case, he has areas of his lungs that are still perfused but not ventilated, resulting in ventilation-perfusion mismatch (V/Q mismatch). This is the commonest reason for low PaO2 (hypoxemia) and low SaO2. (95% of cases of hypoxemia you see will have V/Q mismatch as a cause.)\n\nIn the perioperative setting, the commonest cause for V/Q mismatch is atelectasis. Other causes to consider in the perioperative setting are:\n\nendobronchial intubation, resulting in only one lung being ventilated\npulmonary embolism, resulting in loss of perfusion to some (ventilated) areas of the lungs\nlow cardiac output, resulting in decreased overall perfusion to the lungs",
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "If you increase his FiO2, for example to 70%, his SaO2 may improve slightly (based on the alveolar gas equation); however, his underlying problem (atelectasis) is untreated. Just increasing his FiO2 without other therapy may temporarily help but will not fix the underlying problem.",
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "header",
            content: "", // Placeholder for header
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/13.png"),
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "header",
            content: "", // Placeholder for header
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/14.png"),
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "header",
            content: "", // Placeholder for header
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/15.png"),
          },
        ],
      },
      {
        id: "41",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Mr. West looks like he is going to code again!\n\nYou and your patient are both having a really bad day. You've had enough of this code stuff and you call for help: you consult the intensivist. This is a great opportunity to introduce yourself as you start your ICU rotation the next day.\n\nThe intensivist admits the patient to the ICU and orders the following:\n\nTitrate FiO2 to keep SaO2 above 90%. [This is a temporary intervention, which does not treat the underlying condition.]\n\nContinuous respiratory rate monitoring. [PaCO2 is directly related to the amount of carbon dioxide produced (VCO2) and inversely related to the alveolar ventilation (VA) so increasing alveolar ventilation will decrease PaCO2. Alveolar ventilation is dependent on the volume of breath (tidal volume) and the respiratory rate. In patients without tracheal intubation, the tidal volume cannot be measured but can be subjectively assessed.]\n\nArterial line for ABG measurement. ABG Q6h x 4. [An arterial line permits arterial blood sampling. Monitoring PaO2 and PaCO2 will help determine the effect of treatment.]\n\nIncentive spirometry and chest physiotherapy. [These will help the patient take larger breaths and clear secretions in his lungs.]",
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Consult anesthesiology for postoperative pain management. [Improving the patient's analgesia will allow the patient to take bigger breaths. In Mr. West's case, opioid therapy has not provided adequate analgesia without hypoventilation so alternative analgesic modalities (e.g., epidural analgesia) need to be considered. This is covered in Anesthesiology Learning Module 5.]\n\nSalbutamol 1 to 2 puffs Q4H PRN. [Bronchodilators may help if bronchoconstriction is contributing to the patient's respiratory problem.]\n\n[If pneumonia is suspected, then antibiotics may be prescribed.]",
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "header",
            content: "Positive End-Expiratory Pressure (PEEP)",
          },
          {
            type: "text",
            content:
              "We need to recruit some of his collapsed alveoli. Chest physiotherapy is the key but if we don't succeed, we may also want to recruit some more alveoli by applying certain modes of ventilation.\n\nThis is where the concept of positive end-expiratory pressure (PEEP) comes in.",
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "header",
            content: "Figure. How PEEP improves V/Q mismatch",
          },
          {
            type: "text",
            content: "Atelectasis",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/16.png"),
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "header",
            content: "Non-Invasive Ventilation",
          },
          {
            type: "text",
            content:
              "If Mr West is still cooperative we would consider fitting him with a tight fitting mask that provides continuous positive end-expiratory pressure. The PEEP may recruit some alveoli and improve his oxygenation by reducing the V/Q mismatch. In most patients this will succeed and they will improve.\n\nIn patients who do not require tracheal intubation, PEEP can be provided using BiPAP, usually in patients with hypoventilation or exacerbation of COPD, or using CPAP, using in patients with OSA. Both of these modes of ventilation are considered non-invasive positive pressure ventilation (NIPPV).\n\nIn Mr. West's case, a trial of BiPAP could be considered if he does not improve with the other interventions.",
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "On rounds in ICU the next morning, Mr. West seems even more exhausted. SaO2 is 88%, respiratory rate is 38 breaths / min, and he is diaphoretic and confused.",
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/17.png"),
          },
        ],
      },
      {
        id: "48",
        content: [
          {
            type: "header",
            content: "Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/18.png"),
          },
        ],
      },
      {
        id: "49",
        content: [
          {
            type: "header",
            content: "Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "What are the criteria for tracheal intubation and mechanical ventilation? You quickly review the criteria for tracheal intubation and mechanical ventilation, which can be subdivided into objective and subjective criteria.",
          },
        ],
      },
      {
        id: "50",
        content: [
          {
            type: "header",
            content: "Table",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/19.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/20.png"),
          },
          {
            type: "text",
            content:
              "Table. Objective and subjective criteria for tracheal intubation\nAdapted from Tables 7.1 and 7.2 of O'Connor T, Charapov I. Intubation decisions and challenges. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
        ],
      },
      {
        id: "51",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              'You decide that Mr. West needs tracheal intubation and mechanical ventilation. You prepare all your equipment and call for help. (Airway management is covered in Anesthesiology Learning Module 2.) You successfully intubate Mr. West\'s trachea.\n\nIn most larger hospitals a respiratory therapist will be there to assist you with the tracheal intubation and will set up the ventilator but the basic principles are as follows:\n\nTitrate FiO2 and PEEP to maintain adequate oxygenation. Initially, you probably want to set FiO2 to 100% until his SaO2 improves. As SaO2 improves, titrate FiO2 downward (with the goal to reduce it below 50%) as prolonged high oxygen therapy can also cause harm. Baseline ("physiologic") PEEP is 5 cmH2O but may be titrated upwards as needed (usually not higher than 15 cmH2O due to potential complications).\n\nSet the minute volume (tidal volume x respiratory rate) to achieve normal PaCO2 (unless the patient is known to have chronic CO2 retention) and pH.',
          },
        ],
      },
      {
        id: "52",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/21.png"),
          },
        ],
      },
      {
        id: "53",
        content: [
          {
            type: "header",
            content: "Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/3/22.png"),
          },
        ],
      },
      {
        id: "54",
        content: [
          {
            type: "header",
            content: "Hyperoxia - 1",
          },
          {
            type: "text",
            content:
              "Giving increasing amounts of oxygen is not a benign process. Prolonged high FiO2 (hyperoxia) will lead to oxygen toxicity and will also promote further atelectasis. (Nitrogen in air helps keep the alveoli open so removing nitrogen by giving high concentrations of oxygen will result in alveolar collapse over time.) Additionally hyperoxia can lead to increased reactive oxygen species and cause inflammatory problems similar to acute respiratory distress syndrome (ARDS).\n\nHyperoxia is associated with increasing morbidity and mortality, and it is important to re-evaluate the amount of oxygen needed by your patients. Make an effort to keep the FiO2 low while still maintaining SaO2 above 92%.",
          },
        ],
      },
      {
        id: "55",
        content: [
          {
            type: "header",
            content: "Hyperoxia – 2",
          },
          {
            type: "text",
            content:
              'For some patients with severe COPD, giving too much oxygen can decrease respiratory drive leading to decreased minute ventilation and respiratory arrest. In patients with normal respiratory drive, increased PaCO2 (hypercapnea) is the primary driver as PaCO2 tends to change faster than PaO2. (Try holding your breath. The urge to breathe within minutes is due to the increase of PaCO2 in your body. This occurs before your SaO2 or PaO2 decreases enough to be of clinical significance.)\n\nIn some patients with severe COPD, chronic hypoventilation has resulted in chronic carbon dioxide retention. (These patients have normal pH with an elevated PaCO2 in their arterial blood gas.) Their bodies have adapted to the increased PaCO2 and their respiratory drive relies on decreased PaO2 (hypoxia). Since the hypoxic drive to breathe occurs at a PaO2 of 60 mmHg, the SaO2 will be in the low 90s or high 80s chronically. By administering oxygen to "treat" the hypoxia, the hypoxic drive can be obliterated resulting in apnea and respiratory arrest.',
          },
        ],
      },
      {
        id: "56",
        content: [
          {
            type: "header",
            content: "More on Ventilator Settings - 1",
          },
          {
            type: "text",
            content:
              'Remember that PEEP recruits alveoli. With PEEP, you should be able to reduce the FiO2. Start with 5 cmH2O of PEEP ("physiologic PEEP") and increase this if oxygenation still inadequate. Higher levels of PEEP may lead to problems with raised intrathoracic pressures, reduced venous return, and barotrauma (injury from excess pressure), but are rarely an issue with PEEP < 10 cmH2O.\n\nTo achieve normal PaCO2 (in patients without chronic hypercapnea), adjust the minute ventilation by manipulating tidal volume (VT) and respiratory rate (RR). Typically, physiological tidal volumes (6-8 mL/kg) are used unless there is an increased risk of volutrauma (injury from excess volume), such as in patients with pulmonary bullae (e.g., emphysema). In those cases, lower tidal volumes may be used.',
          },
        ],
      },
      {
        id: "57",
        content: [
          {
            type: "header",
            content: "More on Ventilator Settings - 2",
          },
          {
            type: "text",
            content:
              "The respiratory rate is titrated to achieve the desired PaCO2. A typical respiratory rate would be 8-12 breaths/min unless hypercapnea is suspected (and will require higher RR).\n\nYou will adjust these after looking at your PaCO2. Remember that a high PaCO2 will also affect the PAO2 and thus the PaO2 (based on the alveolar gas equation again).\n\nThese settings should get you started. Further settings will be adjusted based on the patient’s response to oxygenation and ventilation as well as factors such airway pressures, which are beyond the scope of this module.",
          },
        ],
      },
      {
        id: "58",
        content: [
          {
            type: "header",
            content: "Summary",
          },
          {
            type: "text",
            content:
              "The 5 causes of hypoxemia (from most frequent to least frequent) are:\n\nV/Q mismatch (95% of cases you'll see are due to this cause)\nDecreased alveolar ventilation\nRight-to-left shunt\nImpaired diffusion across the alveolar-capillary membranes\nDecreased partial pressure of inspired oxygen (PiO2)",
          },
        ],
      },
      {
        id: "59",
        content: [
          {
            type: "header",
            content: "Summary",
          },
          {
            type: "text",
            content:
              "Although increasing the FiO2 will often increase SaO2 temporarily, this often does not treat the cause (as decreased PiO2 is the least common cause) and may lead to further problems later. Treat the cause.\n\nCalculate the A-a gradient to determine if there is a V/Q mismatch as this is the most common cause of hypoxemia. Most V/Q mismatches are caused by atelectasis in the perioperative setting and will respond to increasing PEEP but sometimes you may need to correct perfusion (e.g., low cardiac output states) to improve V/Q mismatch.\n\nYou should always determine if there is a component of hypoventilation. Assess the minute volume clinically (rate and depth of breathing) and look at PaCO2.\n\nRemember that you may have both hypoventilation and a V/Q mismatch (high PaCO2 and increased A-a gradient).",
          },
        ],
      },
      {
        id: "60",
        content: [
          {
            type: "header",
            content: "Credits",
          },
          {
            type: "text",
            content:
              "Created by:\nMichael Van Der Westhuizen\n\nEdited by:\nAlan Tung MD\nBrad Merriman MD MSc FRCPC\nPeter Choi MD MSc FRCPC\n\nAdapted from work done by:\nPeter Lusch MB ChB MMed FFA FRCPC\nMichael C. Chuang MD FRCPC",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Perioperative Management",
    imageUrl: require("@/assets/images/modules/icon/4.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 4: Perioperative Management of the Patient with Cardiac Disease.",
          },
        ],
      },
      {
        id: "2",
        content: [
          {
            type: "header",
            content: "Objectives",
          },
          {
            type: "text",
            content:
              "1. Outline an approach to formulating the anesthetic considerations for a patient with cardiac issues coming for non-cardiac procedures\n2. Describe a focused patient history and physical examination in a patient with cardiac issues coming for non-cardiac procedures\n3. Describe the normal coronary anatomy and dynamic flow patterns\n4. Evaluate a patient's perioperative cardiac risk using the Revised Cardiac Risk Index\n5. Describe the modalities to investigate cardiac risk factors in a patient coming for non-cardiac surgery and their indications\n6. Explain the physiological importance of supply / demand balance on the heart\n7. Describe how to manipulate determinants of supply / demand balance to achieve our anesthetic goals",
          },
        ],
      },
      {
        id: "3",
        content: [
          {
            type: "header",
            content: "Textbook reading",
          },
          {
            type: "text",
            content:
              "Textbook reading: Sauvé R, Bryson G. Chapter 3. Preoperative evaluation. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012: 27-30 (softcover) or 32-35 (ebook).",
          },
        ],
      },
      {
        id: "4",
        content: [
          {
            type: "header",
            content: "Case Introduction",
          },
          {
            type: "text",
            content:
              "A 75 year old man, Mr. Marlboro, is scheduled to undergo an femoral-popliteal bypass graft for bilateral lower limb ischemia and claudication. He has a history of hypertension for 20 years, hypercholesterolemia, and type 2 diabetes. He also had type II non-ST elevation myocardial infarction (NSTEMI) 7 years ago that was managed medically. Coronary angiography 9 months ago showed stable coronary artery disease with a 50% stenosis of his left anterior descending artery (LAD). Revascularization was deemed unnecessary. He has a 40 pack-year history of smoking.",
          },
        ],
      },
      {
        id: "5",
        content: [
          {
            type: "header",
            content: "Case Introduction",
          },
          {
            type: "text",
            content:
              "He currently takes ramipril 5 mg in the morning, atorvastatin 80 mg daily, aspirin 81mg daily, metoprolol 50 mg twice daily, and metformin 500 mg twice a day. He has no drug allergies.\n\nYou are working in the vascular room today and your attending anesthesiologist asks you to head to the pre-operative area and assess this patient.\n\nTo organize your thoughts before you see the patient, think about patient considerations, anesthetic considerations, and surgical considerations. Take a moment to think about this. (See Anesthesiology Learning Module 1: Preoperative Assessment if you need a review.)\n\nPatient considerations\nAnesthetic considerations\nSurgical considerations",
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "header",
            content: "Table",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/1.png"),
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Diabetes mellitus",
          },
          {
            type: "text",
            content:
              "How does diabetes mellitus impact the perioperative patient?\nEnd organ damage as a result of chronic vascular disease is possible and must be assessed.\nRenal insufficiency and coronary artery disease are important concerns.\nAutonomic dysfunction is a possibility, which may result in labile hemodynamics during anesthesia.\nAutonomic dysfunction can also cause gastroparesis and an increased risk of regurgitation and aspiration on induction.",
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content: "Diabetes mellitus",
          },
          {
            type: "text",
            content:
              "Why is it important to control glucose perioperatively?\nGood glycemic control is important in the preoperative period.\nPatients with poor control are more likely to have micro- and macro-vascular complications.\nPatients with diabetes mellitus requiring treatment with medications (instead of diet alone) have an increased risk of major cardiac adverse events perioperatively.\nPerioperative hyperglycemia leads to increased risk of poor wound healing, infections, and mortality.",
          },
        ],
      },
      {
        id: "9",
        content: [
          {
            type: "header",
            content: "Diabetes mellitus",
          },
          {
            type: "text",
            content:
              "Perioperative management of diabetes mellitus\nBlood glucose levels should be kept at 10 mmol/L or lower.*\nMajor surgery results in poor glycemic control, and usually necessitates insulin therapy in patients with diabetes even if they did not require insulin prior to surgery.\nManagement of glucose-lowering medications:\n- Oral hypoglycemic agents† (e.g., metformin, glyburide, acarbose, sitagliptin, rosiglitazone) are (usually) held (not given) on the day of surgery.\n- ​Oral hypoglycemic agents are held to avoid hypoglycemia intraoperatively.\n- Metformin is held also to avoid lactic acidosis (a rare side effect) in case the patient develops kidney injury.\n- Insulin management depends on the type of diabetes and types of insulin used‡\n- Short-acting insulins (e.g., regular, aspart, lispro) are taken at the usual PM dose the evening before surgery and are held on the day of surgery.\n- Intermediate-acting insulins (e.g., NPH, Lente) and long-acting insulins (e.g., glargine, detemir) are often taken at 80 to 100% of the usual PM dose the evening before surgery and at 50 to 80% of the usual AM dose (depending on the glucose level) on the day of surgery.",
          },
          {
            type: "text",
            content:
              '* This is based on extrapolation of the results of the NICE-SUGAR Study in critically ill patients. Ref. The NICE-SUGAR Study Investigators. Intensive versus conventional glucose control in critically ill patients. N Engl J Med 2009; 360(13):1283-97.\n\n† The pharmacology of oral hypoglycemic agents was covered in the lecture "Pharmacological Management of Type 2 Diabetes" in MEDD 421 Diabetes Mellitus week.\n\n‡ Guidelines vary on the specific doses. For a recent review, please see Duggan EW, Carlson K, Umpierrez GE. Perioperative hyperglycemic management: An update. Anesthesiology 2017; 126(3): 547-60.',
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content: "Hypertension",
          },
          {
            type: "text",
            content:
              'How does systemic hypertension affect the perioperative patient?\nAutoregulation is the body’s ability to maintain constant perfusion over a wide range of blood pressures. This usually corresponds to mean arterial pressures between 50 and 150 mmHg.\nIn patients with untreated or inadequately treated chronic hypertension, the autoregulation curves may shift to the right (higher pressures) in several important vascular beds (cerebral, coronary, and renal) requiring increased mean arterial pressure to maintain perfusion.\nSince reductions in blood pressure commonly seen under anesthesia (regional and general) may result in hypoperfusion of these beds, we need information regarding the patient’s usual BP control and ranges.\nPatients can be particularly at risk for hemodynamic instability during anesthetic induction.\nFor our patient, hypertension, coupled with major fluid shifts expected with the surgery, makes hemodynamic lability a distinct possibility. To ensure that blood pressure is adequately maintained throughout the operation, this patient would benefit from an intra-arterial catheter ("art line") for beat-to-beat blood pressure measurement.',
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "Hypertension",
          },
          {
            type: "text",
            content:
              "Perioperative management of anti-hypertensive medications*\nAlthough this will be covered later in the module, angiotensin-converting enzyme inhibitors (ACEi; e.g., ramipril), angiotensin receptor blockers (ARB; e.g., losartan), direct renin inhibitors (e.g., aliskiren), and diuretics (e.g., furosemide) should be held 24 h before surgery.\nBeta-blockers (e.g., metoprolol) should be continued to avoid withdrawal and to reduce the perioperative risk of cardiovascular complications.\nConsensus is lacking about other classes of anti-hypertensive agents (e.g., alpha-agonists, calcium channel blockers). Depending on the number of agents required to treat the patient's hypertension preoperatively and the preoperative blood pressure on the day of surgery, these agents may or may not be given.",
          },
          {
            type: "text",
            content:
              "* For more details, please see Duceppe E, Parlow J, MacDonald P, et al. Canadian Cardiovascular Society guidelines on perioperative cardiac risk assessment and management for patients who undergo noncardiac surgery. Can J Cardiol 2017; 33(1):17-32. Available via UBC CWL at https://www-sciencedirect-com.ezproxy.library.ubc.ca/science/article/pii/S0828282X16309801?via%3Dihub",
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "Coronary artery disease (CAD)",
          },
          {
            type: "text",
            content:
              "How does coronary artery disease affect the perioperative patient?\nThis patient has known stable coronary artery disease with a previous Type II myocardial infarction (MI).\nA Type II MI occurs when there is an imbalance between the supply of oxygen and the heart’s demand.\nIn contrast, the classic (Type I) MI occurs when there is rupture of an atherosclerotic plaque resulting in acute stenosis of the coronary artery.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content: "Coronary artery disease (CAD)",
          },
          {
            type: "text",
            content:
              "Even without a documented history of MI and previous coronary angiography, your suspicion for CAD should be high in a patient like this.\nThere are strong associations with the patient’s comorbidities – hypertension, hypercholesterolemia, diabetes, and a significant smoking history – and CAD.\nSomeone with peripheral vascular disease is highly likely to have coronary artery disease unless proven otherwise.\n\nCoronary artery disease increases the patient's risk for perioperative major adverse cardiac events and efforts should be made to minimize this risk (this will be addressed later in the case).",
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "header",
            content: "Smoking",
          },
          {
            type: "text",
            content:
              "How does smoking affect the perioperative patient?\n- Increases the risk of developing atherosclerosis, including coronary artery disease\n- Impairs wound healing and immune response\n- Can cause chronic obstructive pulmonary disease and respiratory insufficiency\n\nPerioperative management of smoking\n- The best postoperative outcomes have been achieved with intense smoking cessation programs (counselling and nicotine replacement therapy) started 4 to 8 weeks before surgery. If this is not possible, smoking should be discontinued as soon as possible, with most negative effects of nicotine being ameliorated with stopping at least 12 to 24 h before surgery.\n- Smoking cessation also reduces carbon monoxide in the blood. (Carbon monoxide reduces oxygen-carrying capacity of hemoglobin; therefore it reduces the oxygen content delivered to the tissues.)",
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content: "Cardiac Anatomy",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/2.png"),
          },
          {
            type: "text",
            content:
              "Image by OpenStax College - Anatomy & Physiology, Connexions web site, CCA 3.0, https://commons.wikimedia.org/wiki/File:2005_Surface_Anatomy_of_the_Heart.jpg",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/3.png"),
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content: "Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/4.png"),
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Normal Coronary Anatomy and Flow Patterns",
          },
          {
            type: "text",
            content:
              "Two main coronary arteries supply the circulation to the heart.\n\nRight coronary artery (RCA)\n\n- Supplies the right ventricle and inferior aspect of the heart.\n- Supplies the sinoatrial (SA) and the atrioventricular (AV) nodes.\n- Therefore, right coronary ischemia will result in infarction of the right ventricle and bradycardia / heart block.",
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Normal Coronary Anatomy and Flow Patterns",
          },
          {
            type: "text",
            content:
              "Left coronary artery (LCA)\n\n- Divides into two branches, the left anterior descending (LAD) artery and the circumflex (CX) artery.\n- LAD supplies the septum and anterior wall of the left ventricle.\n- CX supplies the lateral and posterior walls of the left ventricle.\n- Left main coronary artery disease is significant because the entire left ventricle is placed at risk of ischemia and pump failure.\n\nCoronary dominance is defined by the artery which supplies the posterior descending artery. In 70% of people, this arises from the RCA, in 10% from the LCA, and in 20% from both coronary arteries.",
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "Normal Coronary Anatomy and Flow Patterns",
          },
          {
            type: "text",
            content:
              "Coronary circulation\nCoronary circulation differs in the two coronary arteries:\n- In the left coronary artery flow is predominantly a diastolic phenomenon, as the thick walled left ventricle creates such systolic tension that myocardial blood flow is inhibited.\n- In the right coronary artery blood flow is biphasic (occurring in systole as well as diastole) as the right ventricle is thinner walled and therefore does not usually generate high enough wall tension to prevent flow.\n\nIn cases of right ventricular pressure overload (e.g., pulmonary hypertension, pulmonary embolism), right ventricular coronary perfusion can be limited to diastole. In these situations, the right ventricle is extremely sensitive to ischemia from drops in diastolic blood pressure (due to a decreased coronary perfusion gradient).",
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Cardiac Cycle",
          },
          {
            type: "text",
            content:
              "Figure. Animation of the cardiac cycle synchronized with Wiggers diagram\nPlease click the link below to view animation.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/5.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/6.png"),
          },
          {
            type: "text",
            content:
              "Image by DrJanaOfficial - Own work, CCA-SA 4.0, https://commons.wikimedia.org/wiki/File:Cardiac-Cycle-Animated.gif",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Because of his history of coronary artery disease and his cardiac risk factors, you perform a thorough history. The Type II myocardial infarction occurred when he was admitted to hospital with severe pneumonia. He has had no chest pain at rest or with activity since then.\n\nHe denies any history of palpitations, syncopal events, orthopnea, paroxysmal dyspnea, or any other signs of congestive heart failure.",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Classification of Angina",
          },
          {
            type: "text",
            content:
              "Clinically, severity of anginal symptoms are rated using the Canadian Cardiovascular Society (CCS) four-level functional classification, which ranges from Class I to IV. (Note: Patients with a history of coronary artery disease with no symptoms (even during high-levels of activity) are sometimes classified as Class O.)",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/7.png"),
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Technically speaking, Mr. Marlboro does not even have CCS Class I symptoms, for he denies angina. Being the astute medical student you are, though, you recognize that this scale is not highly applicable to Mr. Marlboro, for he cannot exercise. You assess his exercise capacity by history. He is limited in his activity due to claudication, although he feels he could climb a flight of stairs slowly with assistance or walk short distances.\n\nFor your reference, if this patient had congestive heart failure, the severity of his symptoms would be rated based on the New York Heart Association (NYHA) functional classification:",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/8.png"),
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/9.png"),
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Mr. Marlboros’s leg pain limits his exercise capacity. He can climb a single flight of stairs slowly, and can walk only short distances on level ground. Based on history you estimate Mr. Marlboro’s self-reported functional capacity falls short of 4 metabolic equivalents (METS) due to vascular disease.*  The review of systems and the physical examination do not contribute further information to your cardiac assessment.\n\nHistorically, self-reported functional capacity has been used to help estimate perioperative cardiac and long-term risks. These risks may be increased in patients unable to meet a 4-MET demand during activities of daily living. The most recent evidence from a prospective cohort study of 509 patients suggest that the inability to perform at least 4 METS of activity is predictive of perioperative major adverse cardiac events, respiratory failure, and one-year mortality.†",
          },
          {
            type: "text",
            content:
              "* 4 METS is equivalent to gardening or raking leaves. METS are the metabolic equivalents of an activity compared to the basal metabolic rate at rest, that is, the amount of oxygen consumed at rest (3.5 mL/kg/min for a 70-kg individual). A patiient who is able to exert 4 METS is considered to have reasonable fitness.\n\n† Ref. Kaw R, Nagarajan V, Jaikumar L, et al. Predictive value of stress testing, Revised Cardiac Risk Index, and functional status in patients undergoing noncardiac surgery. J Cardiothorac Vasc Anesth 2019; 33(4):927-32.",
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "The Revised Cardiac Risk Index",
          },
          {
            type: "text",
            content:
              "The decision whether to proceed with surgery or consider further investigations will depend on the patient and surgical factors obtained from the history. There are a number of risk indices that have been derived to predict the risk of major adverse cardiac events after noncardiac surgery. The most validated risk index, recommended in Canadian and American guidelines (and the one that you must know), is the Revised Cardiac Risk Index (RCRI).*\n\n* Ref. Lee TH, Marcantonio ER, Mangione CM, et al. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation 1999; 100(10):1043-9.",
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "The Revised Cardiac Risk Index",
          },
          {
            type: "text",
            content:
              "Table. Revised Cardiac Risk Index (RCRI) for Non-Cardiac Surgery\nOne point is assigned for each risk factor. The RCRI is used to predict perioperative major adverse cardiac events (defined as myocardial infarction, cardiac arrest, and 30-day all-cause mortality).",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/10.png"),
          },
          {
            type: "text",
            content:
              "1Defined as a history of myocardial infarction, positive exercise test, current complaint of ischemic chest pain or nitrate use, or electrocardiogram with pathologic Q waves; patients with previous coronary artery bypass surgery or angiography meet criteria if they have such findings after their procedure.\n\n2Defined as a history of heart failure, pulmonary edema, or paroxysmal nocturnal dyspnea; an S3 gallop or bilateral crackles on examination; or a chest radiograph showing pulmonary vascular resistance.\n\n3Defined as a stroke or a previous transient ischemic attack.\n\n4Defined as intraperitoneal, intrathoracic, or suprainguinal vascular surgery.",
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Let's consider this patient's RCRI points and his estimated combined risk for myocardial infarction, cardiac arrest, or 30-day all-cause mortality. Mr. Marlboro has a history of coronary artery disease (1 point). Although he has diabetes mellitus, he is not requiring insulin therapy at this time. His vascular procedure, a femoro-popliteal bypass, is infrainguinal. Based on his history, he does not have congestive heart failure or cerebrovascular disease. We do not know his serum creatinine level yet. As he has a history of diabetes mellitus, it is possible that he may have undiagnosed renal end-organ damage.\n\nMr. Marlboro scores at best 1 point and at worst 2 points so his risk is between 6.0 and 10.1%.\n\nTable. Estimates of the combined risk of myocardial infarction, cardiac arrest, and 30-day all-cause mortality based on the number of RCRI risk factors.\nThese estimates are based on studies published since 2001 and use troponin measurements instead of creatine kinase measurements for the diagnosis of myocardial infarction.",
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "header",
            content: "",
          },
          {
            type: "text",
            content:
              "Risk estimates from Duceppe E, Parlow J, MacDonald P, et al. Canadian Cardiovascular Society guidelines on perioperative cardiac risk assessment and management for patients who undergo noncardiac surgery. Can J Cardiol 2017; 33(1):17-32. Available via UBC CWL at https://www-sciencedirect-com.ezproxy.library.ubc.ca/science/article/pii/S0828282X16309801?via%3Dihub",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/11.png"),
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Further Cardiac Investigations",
          },
          {
            type: "text",
            content:
              "Now that we have an estimate of the patient's risk for major adverse cardiac events, it's time to consider whether additional investigations are needed to guide our management. As mentioned earlier, serum creatinine would be important in this case. He has undergone coronary angiography 9 months ago.\n\nAre there any further cardiac-related investigations that we need? See the flow diagram below.",
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Further Cardiac Investigations",
          },
          {
            type: "text",
            content:
              "Based on our patient's age (75 years), RCRI points, history of cardiovascular disease, and the elective nature of his surgery, current (2017) guidelines from the Canadian Cardiovascular Society recommend measurement of brain natriuretic peptides, either B-type natriuretic peptide (BNP) or N-terminal fragment of proBNP (NT-proBNP), to guide postoperative management. These preoperative cardiac biomarkers can be exceedingly informative as the 30-day rate of nonfatal myocardial infarction and death is 4.9% in patients with normal BNP or NT-proBNP values, but 21.8% in patients with elevated values.*\n\nA preoperative electrocardiogram (ECG) will not refine your estimate of the patient's cardiac risk; however, you will want a baseline ECG for comparison if you need to obtain an ECG postoperatively. If the patient does not have a recent ECG (within the past year), obtain one preoperatively as a baseline.",
          },
          {
            type: "text",
            content:
              "* Ref. Rodseth RN, Biccard BM, Le Manach Y, et al. The prognostic value of pre-operative and post-operative B-type natriuretic peptides in patients undergoing noncardiac surgery: B-type natriuretic peptide and N-terminal fragment of pro-B-type natriuretic peptide: a systematic review and individual patient data meta-analysis. J Am Coll Cardiol 2014; 63:170-80.",
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Further Cardiac Investigations",
          },
          {
            type: "text",
            content:
              "Figure. Flow diagram for preoperative cardiac risk assessment and postoperative monitoring in patients undergoing non-cardiac surgery.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/12.png"),
          },
          {
            type: "text",
            content:
              "Image from https://ars-els-cdn-com.ezproxy.library.ubc.ca/content/image/1-s2.0-S0828282X16309801-gr1_lrg.jpg from Duceppe E, Parlow J, MacDonald P, et al. Canadian Cardiovascular Society guidelines on perioperative cardiac risk assessment and management for patients who undergo noncardiac surgery. Can J Cardiol 2017; 33(1):17-32. Available via UBC CWL at https://www-sciencedirect-com.ezproxy.library.ubc.ca/science/article/pii/S0828282X16309801?via%3Dihub",
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "header",
            content: "Other Perioperative Cardiac Testing",
          },
          {
            type: "text",
            content:
              "Those with an elevated BNP value should have an electrocardiogram obtained in the post-anesthetic care unit as well as daily troponins for 48-72 hours. Most perioperative myocardial infarctions occur within 48 h following surgery and the majority (65%) are asymptomatic. Myocardial injury after noncardiac surgery is associated with a significant increase in 30-day mortality. (In the largest prospective cohort study, VISION, the 30-day mortality was 9.8% in patients with an elevated troponin compared to 1.1% in those without elevated values.\n\nThe 2017 guidelines also recommend AGAINST ordering the following tests for the sole purpose of cardiac risk estimation:\n\n- Resting echocardiography\n- Coronary computed tomographic angiography\n- Exercise stress testing\n- Cardiopulmonary exercise testing\n- Pharmacological stress echocardiography\n- Pharmacological stress radionuclide imaging",
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Mr. Marlboro meets the criteria for preoperative cardiac marker measurement and you order an NT-proBNP and a serum creatinine. He has a preoperative electrocardiogram from 9 months ago when he underwent coronary angiography. His coronary artery disease is stable and he would not benefit from further investigations at this time. You are happy to proceed with his anesthetic.\n\nLater, you check the results of preoperative blood tests. Mr. Marlboro's creatinine is 100 mcmol/L (normal) and his NT-proBNP is 120 mg/L (elevated). Therefore, his RCRI score was 1. Based on his elevated NT-proBNP value, you order a postoperative electrocardiogram to be recorded in the postanesthetic care unit. You order daily troponins to be drawn for 48 hours post-operatively.",
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "header",
            content: "",
          },
          {
            type: "text",
            content:
              "Table. Management of perioperative cardiovascular medications from the 2017 Canadian Cardiovascular Society Guidelines.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/13.png"),
          },
          {
            type: "text",
            content:
              "Ref. Duceppe E, Parlow J, MacDonald P, et al. Canadian Cardiovascular Society guidelines on perioperative cardiac risk assessment and management for patients who undergo noncardiac surgery. Can J Cardiol 2017; 33(1):17-32. Available via UBC CWL at https://www-sciencedirect-com.ezproxy.library.ubc.ca/science/article/pii/S0828282X16309801?via%3Dihub\n\n*ASA should be continued in patients undergoing carotid endarterectomy and in patients with recent coronary stent insertion (6 weeks for bare metal stent, 3-12 months for drug eluting depending on generation)",
          },
        ],
      },
      {
        id: "36",
        content: [
          {
            type: "header",
            content:
              "Are there any interventions or medical therapies you should initiate prior to the patient’s operation?",
          },
          {
            type: "text",
            content:
              "In the past, initiation of a number of interventions were suggested to reduce the risk of major adverse cardiac events. For some of these interventions, large randomized controlled trials have not found any significant benefit; for others, there is still a lack of evidence. The following interventions should NOT be started or performed prior to noncardiac surgery for the purpose of preventing perioperative cardiac events:\n\n- Aspirin\n- Beta-blockers (within 24 hours before noncardiac surgery)\n- Alpha-2 agonists\n- Calcium channel blockers\n- Prophylactic coronary revascularization in patients with stable coronary artery disease",
          },
          {
            type: "text",
            content:
              "Ref. Duceppe E, Parlow J, MacDonald P, et al. Canadian Cardiovascular Society guidelines on perioperative cardiac risk assessment and management for patients who undergo noncardiac surgery. Can J Cardiol 2017; 33(1):17-32. Available via UBC CWL at https://www-sciencedirect-com.ezproxy.library.ubc.ca/science/article/pii/S0828282X16309801?via%3Dihub",
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "header",
            content: "Intraoperative Monitoring",
          },
          {
            type: "text",
            content:
              "How should this patient be monitored intraoperatively?\n\nWith this patient with multiple cardiovascular comorbidities including coronary artery disease, hypertension, hypercholesterolemia, smoking, type 2 diabetes mellitus, and peripheral vascular disease, there is opportunity for significant hemodynamic compromise. Monitors assist the anesthesiologist in diagnosing intraoperative events, especially in patients who are not awake.",
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "header",
            content: "Intraoperative Monitoring",
          },
          {
            type: "text",
            content:
              "When thinking about monitors, organize them into three categories:\n\n1. **Human monitoring**\n   - The most important monitor is someone who is trained to provide anesthesia.\n   - A patient who is able to respond to questions can also self-report problems as cardiovascular symptoms (e.g., angina) often occur before changes are seen on monitors such as the electrocardiogram.\n\n2. **Required monitoring equipment**: These are monitors that must be used in the provision of any anesthetic.\n\n3. **Other available monitoring equipment**: These are monitors that are selectively used based on patient, anesthetic, and surgical considerations.\n\nIn Canada, monitoring equipment are stipulated by the Canadian Anesthesiologists' Society in their guidelines for the practice of anesthesiology annually.",
          },
          {
            type: "text",
            content:
              "Ref. Canadian Anesthesiologists' Society. Guidelines to the practice of anesthesia, revised edition. Can J Anesth 2019; 66(1):75-108.",
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "header",
            content: "Monitoring Equipment*",
          },
          {
            type: "text",
            content:
              'Required monitoring equipment\nA good way to remember required monitoring equipment is to remember that they are required to assess Airway (oxygenation), Breathing (ventilation), Circulation, and Drug delivery / effect ("ABCD"):\n\n- **Airway**: pulse oximetry is required to measure oxygen saturation\n- **Breathing**: capnography is required to assess ventilation during general anesthesia or moderate to deep sedation\n- **Circulation**:\n   - Electrocardiography is required to measure heart rate and rhythm\n   - A three-lead electrode system is most commonly used with one (white) electrode on the right shoulder ("white on right"), one (black) electrode on the left shoulder ("black on the opposite side"), and one (red) electrode on the left chest, abdomen, or leg. Lead II is the most commonly assessed lead\n   - Non-invasive blood pressure monitoring (e.g., automated blood pressure cuff) is required to measure blood pressure\n- **Drug delivery / effect**: agent-specific gas monitor is required if an inhalational anesthetic is used to estimate depth of anesthesia',
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "header",
            content: "Monitoring Equipment",
          },
          {
            type: "text",
            content:
              "Available monitoring equipment\nAdditional monitoring equipment provide further information on breathing, circulation, drug effect, and environmental exposure:\n\n- **Breathing**:\n   - Stethoscope, which can be precordial, esophageal, or paratracheal\n   - Spirometer to measure tidal volume\n   - Manometer to measure cuff pressure if a cuffed endotracheal tube is used\n- **Circulation**: invasive hemodynamic monitoring equipment is used to measure arterial, central venous, right-sided cardiac, and cerebrovascular pressures\n- **Drug effect**: a peripheral nerve stimulator is used to measure the extent of neuromuscular blockade when neuromuscular blocking agents are used\n- **Environmental exposure**: temperature may be measured in the mouth, nasopharynx, blood, rectum, or skin\n\n* For more details on monitoring, please see Sullivan P, Soliman A. Chapter 10. Monitoring in anesthesia. In: Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.",
          },
          {
            type: "text",
            content:
              "Ref. Canadian Anesthesiologists' Society. Guidelines to the practice of anesthesia, revised edition. Can J Anesth 2019; 66(1):75-108.",
          },
        ],
      },
      {
        id: "41",
        content: [
          {
            type: "header",
            content: "Advanced Cardiac Monitoring",
          },
          {
            type: "text",
            content:
              'Intra-arterial catheter ("arterial line")\n\nThere are instances where more invasive monitoring is required such as the use of an arterial, central venous, or pulmonary artery catheter. Arterial pressure monitoring is commonly done in higher-risk cardiac, thoracic, vascular, and neurosurgical procedures. When more frequent blood pressure monitoring or frequent intraoperative blood sampling are needed, an arterial line may be inserted.\n\nArterial lines are small-diameter (20- or 22-gauge) peripheral catheters that are inserted into an artery. The most common site is the radial artery; however, the femoral, brachial, and dorsalis pedis arteries may be used.\n\nThe beat-to-beat continuous blood pressure monitoring from an arterial line enables earlier detection of changes in blood pressure compared to non-invasive monitors, which usually cycle every 2 to 5 minutes. (Non-invasive blood pressure measurement can be continuous in an emergency situation but there is a delay still between measurements and the repeated inflation and deflation is very uncomfortable and can cause petechial injury under the cuff.) Earlier detection of hemodynamic changes allow more rapid initiation of treatment when needed.',
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "header",
            content: "Advanced Cardiac Monitoring",
          },
          {
            type: "text",
            content:
              'Central venous catheter ("central line")\n\nA central venous catheter is used to measure the central venous pressure, which is a rough estimate of the right atrial and ventricular pressures. Indications for a central venous catheter include significant cardiopulmonary disease and shock states, the need to administer vasoactive or inotropic drugs, temporary cardiac pacing, hemodialysis or renal replacement therapy, and parenteral nutrition. Central lines are long, large-diameter catheters that are inserted under sterile conditions into the internal jugular, subclavian, or femoral veins.',
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "header",
            content: "Advanced Cardiac Monitoring",
          },
          {
            type: "text",
            content:
              "Pulmonary artery catheter\n\nPulmonary artery catheters measure pulmonary arterial pressure and estimate left atrial pressure. Measurements from pulmonary artery catheters allow calculation of physiological cardiac parameters (e.g., cardiac output, systemic vascular resistance) and provide information on oxygen delivery and consumption. These catheters are mainly used during cardiac surgery or in critically ill patients. Trans-esophageal echocardiography (TEE) provides much of the information gathered by pulmonary artery catheters (except information on oxygen delivery and consumption) and allows dynamic visualization of the cardiac structures; thus, TEE has supplanted pulmonary artery catheters in cardiac surgery.",
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              'In the operating room, after the briefing and preoperative checklist are completed, you apply required monitors to Mr. Marlboro. Since he has multiple cardiovascular comorbid conditions, is of advanced age, and is undergoing a vascular procedure, you choose the five-lead electrode system ("five-lead ECG") for electrocardiography. Additionally, due to the nature of the surgery and because the patient’s increased risk for hemodynamic instability, you decide to insert an arterial line, under local anesthesia, in one of his radial arteries prior to anesthetic induction. As Mr. Marlboro has peripheral artery disease, you use ultrasound to help you visualize the artery during insertion.',
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "header",
            content: "Determinants of Myocardial Perfusion",
          },
          {
            type: "text",
            content:
              "Normal myocardial perfusion requires an adequate supply of oxygen to meet the demands of the myocardium. Myocardial ischemia occurs when the supply is unable to meet the demands. Ongoing ischemia results in Type II myocardial infarction, which is the majority of perioperative myocardial infarctions.\n\nMyocardial oxygen supply depends on:\n- **Coronary perfusion pressure** (aortic diastolic pressure – right atrial end-diastolic pressure) - increasing perfusion pressure increases oxygen supply\n- **Heart rate** - increasing heart rate decreases oxygen supply (as there is less time to offload oxygen from hemoglobin during diastole)\n- **Arterial oxygen content** - increasing arterial oxygen content increases oxygen supply\n   - Arterial oxygen content is the sum of the amount of oxygen bound onto hemoglobin and the amount of oxygen dissolved in the plasma. Mathematically, CaO2 = (SaO2 x 1.34 Hb) + 0.003 PaO2*\n   - The hemoglobin concentration and oxygen saturation are the most important factors; arterial oxygen tension is far less important due to the small amount of oxygen dissolved in plasma.",
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "header",
            content: "Determinants of Myocardial Perfusion",
          },
          {
            type: "text",
            content:
              "Myocardial oxygen demands depend on:\n- **Basal metabolism** - increasing basal metabolic rate increases oxygen demands\n- **Heart rate** - increasing heart rate increases oxygen demands\n- **Contractility** - increasing contractility increases oxygen demands\n- **Wall stress (or tension)** - increasing wall stress increases oxygen demands\n   - Defined as the pressure that arises from the tangential force acting on myocardial fibres to pull them apart (e.g., distension of the LV with greater blood volume). The energy expended by the myocardial fibres to counteract this force results in increased oxygen consumption.\n   - Wall stress = Pr/2h,† where P is pressure, r is radius (of the left ventricle), and h is thickness (of the left ventricle)\n   - Affected by preload, which is the stretch placed on individual sarcomeres of the heart at the end of diastole (in physiological terms). This determines both the left ventricular end-diastolic pressure (P in the equation) and the left ventricular end-diastolic volume (which affects r in the equation) based on the Frank-Starling Law of the Heart. Simplistically, preload determines the static (baseline) wall stress at the end of diastole.\n   - Affected by afterload, which is the force against which the ventricle contracts to eject the volume of blood during systole. This force is affected mainly by the systemic vascular resistance and, to a much smaller degree, by the physical characteristics (mass and viscosity) of the blood. The pressure generated is the left ventricular end-systolic pressure (or aortic blood pressure) and is equivalent to the systolic blood pressure in the absence of aortic valvular disease.",
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "header",
            content: "Determinants of Myocardial Perfusion",
          },
          {
            type: "text",
            content:
              "As you can see, some factors may adversely affect both oxygen supply and oxygen demand.\n\n- As systole occupies a relatively fixed duration out of the cardiac cycle, increases in heart rate compromise the time available for diastole. Coronary blood flow only occurs during diastole in the left ventricle.\n- More cardiac contractions per unit of time also increases need for oxygen and coronary blood flow.\n- Excessive preload increases wall stress, which increases oxygen consumption and reduces coronary blood flow.",
          },
          {
            type: "text",
            content:
              "* You were introduced to this equation and its concept in Anesthesiology Learning Module 3: Hypoxia - A Clinical Approach to Diagnosis and Treatment. This equation is shown to help you understand the concept of oxygen content. You are NOT expected to memorize this equation for assessment purposes in this rotation. Also note that this equation uses the imperial unit (g/dL) for hemoglobin concentration instead of the metric unit (g/L) so you will need to convert the hemoglobin value to the former unit before calculating oxygen content.\n\n† This equation is shown to help you understand the concept of wall stress. You are NOT expected to memorize this equation for assessment purposes in this rotation.",
          },
          {
            type: "text",
            content:
              "Figure. Determinants of myocardial oxygen supply and myocardial oxygen demand",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/14.png"),
          },
        ],
      },
      {
        id: "48",
        content: [
          {
            type: "header",
            content:
              "Anesthetic Goals to Prevent Intraoperative Myocardial Ischemia",
          },
          {
            type: "text",
            content:
              "Based on the determinants of myocardial perfusion, there are six factors that are co-dependent variables acting on the heart to affect the balance of myocardial oxygen supply and myocardial oxygen demand. These are: preload, afterload, heart rate, cardiac rhythm, contractility, and arterial oxygen content.*",
          },
          {
            type: "text",
            content:
              "To avoid myocardial ischemia, the goals for your anesthetic will include:",
          },
          {
            type: "text",
            content:
              "Preload\nPhysiological goal: Maintain adequate preload as the left ventricular end-diastolic volume determines stroke volume, which determines the amount of blood flowing to the coronary arteries. Inadequate preload results in hypotension and reflex tachycardia resulting in decreased oxygen supply and increased oxygen demand. Excessive preload will increase the static wall stress, which increases oxygen demand.",
          },
          {
            type: "text",
            content:
              "Clinical management:\nKeep the patient's intravascular volume normal and avoid overloading the patient with intravenous fluids.\nExcessive preload unrelated to volume overload can be reduced using nitrates (e.g., nitroglycerin) or dihydropyridine calcium channel blockers (e.g., nifedipine).",
          },
        ],
      },
      {
        id: "49",
        content: [
          {
            type: "header",
            content:
              "Anesthetic Goals to Prevent Intraoperative Myocardial Ischemia",
          },
          {
            type: "text",
            content:
              "Afterload\nPhysiological goal: Maintain normal afterload. Inadequate afterload also results in hypotension and a reflex tachycardia. Excessive afterload will increase the dynamic wall stress.",
          },
          {
            type: "text",
            content:
              "Clinical management:\nTreat decreased afterload (usually vasodilation) with alpha-1 agonists (e.g., phenylephrine).\nIf blood pressure is elevated, excessive afterload is a factor, AND pain is not the cause, consider an arterial vasodilator such as nitroprusside or dihydropyridine calcium channel blockers (e.g., nifedipine).",
          },
        ],
      },
      {
        id: "50",
        content: [
          {
            type: "header",
            content:
              "Anesthetic Goals to Prevent Intraoperative Myocardial Ischemia",
          },
          {
            type: "text",
            content:
              "Heart rate\nPhysiological goal: Avoid tachycardia, which increases oxygen demand.",
          },
          {
            type: "text",
            content:
              "Clinical management:\nFirst treat any cause that might result in tachycardia from sympathetic stimulation (e.g., pain) or from hypotension (e.g., intravascular volume depletion from dehydration or bleeding, anesthetic overdose).\nConsider beta-blockers (e.g., esmolol or metoprolol) in the former situation if pain is not the cause.",
          },
          {
            type: "text",
            content:
              "Cardiac rhythm\nPhysiological goal: Sinus rhythm is always the best rhythm.\nClinical management: Treat dysrhythmias (with the exception of chronic atrial fibrillation).",
          },
        ],
      },
      {
        id: "51",
        content: [
          {
            type: "header",
            content:
              "Anesthetic Goals to Prevent Intraoperative Myocardial Ischemia",
          },
          {
            type: "text",
            content:
              "Contractility\nPhysiological goal: Maintain normal contractility. Inadequate contractility causes hypotension and reflex tachycardia. Excessive contractility will increase oxygen demand.",
          },
          {
            type: "text",
            content:
              "Clinical management:\nTitrate drugs that decrease myocardial contractility (e.g., propofol) to effect.\nCheck calcium level if decreased contractility is suspected and treat hypocalcemia. Consider inotropes if further treatment is needed.\nFor excessive contractility, treat the cause (e.g., increased sympathetic activity from pain or hyperdynamic states).",
          },
          {
            type: "text",
            content:
              "Arterial oxygen content\nPhysiological goal: Avoid decreased arterial oxygen content.\nClinical management:\nAvoid significant anemia (Hb < 100 g/L in patients with coronary artery disease or significant cardiac risk factors). When appropriate, use antifibrinolytic agents or cell salvage to reduce blood loss.\nTreat other causes of hypoxia to increase oxygen saturation and arterial oxygen tension.\nMaintain oxygen saturation at or above 92%.",
          },
          {
            type: "text",
            content:
              "* One mnemonic is CRRAP: Contractility, Rhythm, Rate, Afterload, Preload.",
          },
        ],
      },
      {
        id: "52",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "After application of required monitors and insertion of an arterial line, your preceptor sedates Mr. Marlboro with a small dose of midazolam IV and gives Mr. Marlboro a spinal anesthetic. A low-dose infusion of propofol is started to provide intraoperative sedation so Mr. Marlboro is not awake during his surgery. He is spontaneously breathing on 6 L/min of oxygen by face mask.",
          },
          {
            type: "text",
            content:
              "Approximately 30 minutes into the procedure, you notice the following: SpO2 98%, RR 14 breaths/min without obstruction, HR 102 beats/min, and BP 85/38 mmHg. Mr. Marlboro is sleeping. His breath sounds are normal. He has received 500 mL of Plasmalyte (an isotonic crystalloid IV fluid). You are monitoring his electrocardiogram - you are fairly sure that he is in sinus rhythm, but there is (new) 2-mm ST-depression on lead V5. You recognize that this may be ischemia. How are we going to fix this?",
          },
        ],
      },
      {
        id: "53",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "Don't fret, you know how to do this! You now know that we must optimize the oxygen supply-demand balance of the heart and this can be done by considering the six variables affecting oxygen supply and demand. So go to each one individually, think of what goal is for each, and suggest a way of achieving that goal.",
          },
          {
            type: "text",
            content:
              "Before looking at our answers, write your answers here:\n\nPreload\nAfterload\nHeart rate\nCardiac rhythm\nContractility\nArterial oxygen content",
          },
        ],
      },
      {
        id: "54",
        content: [
          {
            type: "header",
            content: "Suggested Answers",
          },
          {
            type: "text",
            content:
              "Preload\nPatients need adequate preload to perfuse the heart, but not such an excessive amount that it causes an increase in wall tension. A reasonable course of action would be to increase the IV fluid infusion rate to give a bolus and monitor blood pressure. While fluid overload is a concern that you must always keep in mind, Mr. Marlboro has no history or signs of heart failure and has not received a significant amount of fluid so far.",
          },
        ],
      },
      {
        id: "55",
        content: [
          {
            type: "header",
            content: "Suggested Answers",
          },
          {
            type: "text",
            content:
              "Afterload\nAssuming the patient has no aortic disease (and Mr. Marlboro doesn't), this patient’s low blood pressure is most likely due to a decrease in systemic vascular resistance as a result of his spinal anesthetic, the propofol infusion, and being hypovolemic after fasting preoperatively. While the decrease in afterload reduces the oxygen demand of the myocardium, the low blood pressure is not maximizing perfusion of the coronary arteries. (Remember, coronary perfusion pressure = aortic diastolic pressure - right atrial end diastolic pressure). Regardless of the cause of his hypotension, the blood pressure should be increased. This is initially achieved with fluid bolus and vasopressors.",
          },
          {
            type: "text",
            content:
              "In this case, phenylephrine would be the initial choice for a vasopressor. Phenylephrine is an alpha-1 agonist and causes vasoconstriction of blood vessels. This leads to an increased systemic vascular resistance and increased preload. Additionally it leads to an increased end diastolic aortic pressure leading to an increased coronary perfusion pressure. A reflex decrease in heart rate is often seen in response to the effects of phenylephrine, which would be helpful in this case (see below).",
          },
        ],
      },
      {
        id: "56",
        content: [
          {
            type: "header",
            content: "Suggested Answers",
          },
          {
            type: "text",
            content:
              "Heart rate\nMr. Marlboro is tachycardic. This is most likely compensatory in response to the hypotension. While the tachycardia is not optimal for coronary perfusion, his high heart rate is likely maintaining his blood pressure. The most appropriate course of action would be to optimize the preload and afterload to support cardiac output and allow for a natural decrease in heart rate.",
          },
          {
            type: "text",
            content:
              "However, if treatment of preload and afterload does not decrease the heart rate, you will need to treat his tachycardia to increase his diastolic time and oxygen supply and decrease oxygen demand. Beta-blockade with either esmolol or metoprolol should be considered. Labetalol would not be a good idea as it is both a beta-blocker and an alpha-blocker and would decrease systemic vascular resistance (which you're trying to increase) along with the decrease in heart rate.",
          },
          {
            type: "text",
            content:
              "In a patient experiencing ischemia who is hypertensive and tachycardic, beta-blockade may be perfectly reasonable. Inadequate analgesia, awareness (under general anesthesia), and anxiety (in the sedated or awake patient) may also contribute to tachycardia, so remember to assess the patient. (In this case, Mr. Marlboro is comfortable and sleeping under sedation so these are not contributing factors.)",
          },
        ],
      },
      {
        id: "57",
        content: [
          {
            type: "header",
            content: "Suggested Answers",
          },
          {
            type: "text",
            content:
              "Rhythm\nEnsure the patient is in sinus rhythm, which he is.",
          },
          {
            type: "text",
            content:
              "Contractility\nContractility is a balance. We want to minimize his oxygen demand but also want to maintain sufficient cardiac output. Decreasing Mr. Marlboro's contractility may reverse his developing ischemia but we need avoid further hypotension. At this point, address the concerns with preload and afterload first. If blood pressure and the ischemia does not improve, beta-blockade (already considered for treatment of the tachycardia) will also decrease contractility.",
          },
          {
            type: "text",
            content:
              "Arterial Oxygen Content\nMr. Marlboro is breathing well and his oxygen saturation is 98% so these factors are unlikely to affect his arterial oxygen content. To assess his hemoglobin, you can estimate the blood loss by looking at the amount in the suction containers and the used sponges. As he has an arterial line in place, you can obtain blood samples for Hb and an arterial blood gas. If Mr. Marlboro's Hb is less than 100 g/L, transfuse.",
          },
        ],
      },
      {
        id: "58",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/15.png"),
          },
        ],
      },
      {
        id: "59",
        content: [
          {
            type: "header",
            content: "Our Case Solved",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/4/16.png"),
          },
        ],
      },
      {
        id: "60",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "You increase the IV rate and give Mr. Marlboro a 500-mL bolus of Plasmalyte. You wake him and ask him whether he has any chest or incisional pain, discomfort, or shortness of breath, all of which he denies. There has been no blood loss yet. You give him 100-mcg boluses of phenylephrine to maintain his systolic blood pressure above 100 mmHg and his mean arterial pressure above 70 mmHg, while your preceptor sets up a phenylephrine infusion. Although his blood pressure improves with these interventions, his heart rate remains fairly fast (98 beats/min) and there are still some 1-mm ST-depression in lead V5. You judiciously give him metoprolol 1 mg IV.",
          },
          {
            type: "text",
            content:
              "His vital signs 15 minutes after treatment are: SpO2 99%, RR 16 breaths/min, HR 75 beats/min, and BP 120/85 mmHg. The ST-segment depression has resolved.",
          },
          {
            type: "text",
            content: "The rest of the case is uneventful.",
          },
          {
            type: "text",
            content:
              "After surgery, an electrocardiogram is recorded in the postanesthetic care unit and shows no significant changes from his previous electrocardiogram 9 months ago. Troponins are drawn at 24 and 48 hours after surgery and they are not elevated. Mr. Marlboro is discharged two days after surgery and makes an uneventful recovery.",
          },
        ],
      },
      {
        id: "61",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/17.png"),
          },
        ],
      },
      {
        id: "62",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/18.png"),
          },
        ],
      },
      {
        id: "63",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/19.png"),
          },
        ],
      },
      {
        id: "64",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/20.png"),
          },
        ],
      },
      {
        id: "65",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/21.png"),
          },
        ],
      },
      {
        id: "66",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/22.png"),
          },
        ],
      },
      {
        id: "67",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/23.png"),
          },
        ],
      },
      {
        id: "68",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/4/24.png"),
          },
        ],
      },
      {
        id: "69",
        content: [
          {
            type: "header",
            content: "Credits",
          },
          {
            type: "text",
            content: "Created by:\nMichael van der Westhuizen\nSimon Adamson",
          },
          {
            type: "text",
            content:
              "Edited by:\nAlan Tung MD\nBrad Merriman MD MSc FRCPC\nPeter Choi MD MSc FRCPC",
          },
          {
            type: "text",
            content:
              "Adapted from previous work by:\nJohn Dolman MD FRCPC\nMitch Giffin MD FRCPC\nOliver Applegarth MD MEd FRCPC\nMichael Chuang MD FRCPC",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Regional Anesthesia",
    imageUrl: require("@/assets/images/modules/icon/5.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 5: Regional Anesthesia",
          },
        ],
      },
      {
        id: "2",
        content: [
          {
            type: "header",
            content: "Objectives",
          },
          {
            type: "text",
            content:
              "1. Understand the indications and contraindications to neuraxial and regional anesthesia\n2. Learn the pertinent anatomy for performing a spinal anesthetic\n3. Understand the factors that determine spinal anesthesia spread\n4. Understand the basic pharmacology of local anesthetic activity\n5. Understand the hemodynamic effects of spinal anesthesia\n6. Review the anatomy of the brachial plexus\n7. Appreciate the different modalities that can be used to localize nerves for blockade\n8. Understand the potential complications of regional anesthesia",
          },
        ],
      },
      {
        id: "3",
        content: [
          {
            type: "header",
            content: "Case Introduction",
          },
          {
            type: "text",
            content:
              "Mr. Arthur Roma is a 68 year old man who presented to the vascular surgeon with worsening right leg claudication and it was determined that he will need a femoral to popliteal bypass to alleviate his symptomatology. Unfortunately, his left leg vessels are also compromised, such that the vascular surgeon will require harvesting a vein from his left arm.\n\nMr. Roma has a 60 pack year smoking history and has reduced his smoking to half a pack a day. Consequently, he has bullous emphysematous disease in his lung and has been admitted to hospital twice this year for treatment of COPD exacerbations.",
          },
        ],
      },
      {
        id: "4",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/1.png"),
          },
        ],
      },
      {
        id: "5",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/2.png"),
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "text",
            content: "Correct! The best answer is D!",
          },
          {
            type: "text",
            content:
              "A) Because surgery will be performed at two sites, right leg and left arm, a general anesthetic is one option. However, given his compromised respiratory status, he may potentially be at risk for complications such as difficulty with oxygenation and ventilation, barotrauma with development of pneumothorax, and requirement for prolonged ventilation in the post-operative period.",
          },
          {
            type: "text",
            content:
              "B) Surgical infiltration of local anesthetic is also an option but requires a cooperative patient and amenable surgeon and may be limited by the maximal dose of local anesthetic that can be given to the patient.",
          },
          {
            type: "text",
            content:
              "C) Spinal anesthesia will adequately block the lower extremities but not the arm.",
          },
          {
            type: "text",
            content:
              "D) Spinal plus an additional brachial plexus block could be used to anesthetize the left arm.",
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Back to the case!",
          },
          {
            type: "text",
            content:
              "After discussing the options with Mr. Roma, he agrees that a spinal anesthetic combined with a brachial plexus block would be the best option for him, given his lung disease. On exam, you note a systolic murmur on precordial exam which concerns you.",
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content:
              "What are some contraindications to a spinal anesthetic you would screen for?",
          },
          {
            type: "text",
            content:
              "General contraindications?\nAbsolute contraindications to spinals?\nRelative contraindications to spinals?",
          },
        ],
      },
      {
        id: "9",
        content: [
          {
            type: "header",
            content:
              "What are some contraindications to a spinal anesthetic you would screen for?",
          },
          {
            type: "text",
            content:
              "General contraindications?\n- Lack of knowledge of the procedure or administered medications\n- Lack of resuscitative equipment and drugs\n- Patient refusal",
          },
          {
            type: "text",
            content:
              "Absolute contraindications to spinals?\n- Coagulopathies including thrombocytopenia\n- Central nervous system tumour with mass effect\n- Infection at the site of needle entry",
          },
          {
            type: "text",
            content:
              "Relative contraindications to spinals?\n- Systemic infections\n- Central nervous system diseases such as multiple sclerosis\n- Abnormal anatomy\n- Aortic stenosis",
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content:
              "What hemodynamic changes occur after spinal anesthesia and how would they affect aortic stenosis?",
          },
          {
            type: "text",
            content:
              "In addition to motor and sensory blockade, intrathecal local anesthetic produces a sympathetic block such that there is vasodilation in the areas affected by the spinal anesthetic. This would cause a drop in the cardiac preload and afterload. In hypovolemic patients, there may be profound hypotension; which is why it is important to ensure patients are euvolemic prior to spinal anesthesia. The drop in the venous return will reduce the atrial and ventricular stretch receptor activity and could cause bradycardia and even asystole. These reflexes are called the Bainbridge and Bezold-Jarisch reflexes. Not infrequently, the hypotension associated with spinal anesthesia requires inotropic support to maintain adequate perfusion pressure. Phenylephrine and ephedrine are most often used to treat this.",
          },
          {
            type: "text",
            content:
              "In aortic stenosis, there is remodelling of the left ventricle leading to concentric hypertrophy which makes the muscle thicker, increasing oxygen demand; and the ventricle smaller, leading to smaller diastolic volumes. Therefore, perfusion is preload dependent meaning adequate ventricular filling is critical. This is why a drop in preload or atrial arrhythmia in aortic stenosis may be catastrophic. In addition, coronary blood flow is dependent on the maintenance of the afterload. Drops in afterload will preferentially direct blood systemically and make flow to the coronaries inadequate. In fact, precipitatous drops in afterload may actually reverse coronary blood flow by a venturi effect across a tight aortic stenotic lesion.",
          },
          {
            type: "text",
            content:
              "A spinal anesthetic in aortic stenosis will drop the preload and decrease cardiac output. The inadequate end organ perfusion will initiate a sympathetic response and trigger tachycardia increasing demand. This supply and demand imbalance may cause dysrhythmias worsening the situation. Resuscitation and CPR at his point will be difficult at best in the setting of severe aortic stenosis.",
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/3.png"),
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "How would you landmark for needle placement?",
          },
          {
            type: "text",
            content:
              "With a midline approach, the goal is to introduce the needle into the intrathecal space between the spinous processes. In adults, the spinal cord ends at L1-L2 and a small percentage, at L2-L3. Therefore, the needle is introduced at L3-L4 or below to avoid trauma to the cord. A line between the two anterior superior iliac spines typically corresponds to L4 and the space immediately above that is a good starting point.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/4.png"),
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/5.png"),
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content:
              "What are the 2 main factors that determine the dermatomes blocked with the spinal and which local anesthetic would be good for this case?",
          },
          {
            type: "text",
            content:
              "The 2 main factors that determine the areas blocked by the spinal anesthetic are the baricity of the solution and the patient position. Baricity is the density of the local anesthetic solution and it is described as either a hypobaric, isobaric, or hyperbaric solution relative to the density of the CSF. In this regard, the local anesthetic will rise, stay isolated, or descend from the point of injection in the spinal canal, respectively.\n\nThe patient position while the block is setting is also important in determining block height of hypo- and hyperbaric solutions. In the sitting position, a hypobaric solution will rise up the spinal canal and a hyperbaric solution will descend. For example, an ideal combination for surgery in the perineal area would be a hyperbaric solution with the patient sitting for about 10 minutes which would produce a “saddle block,” blocking primarily the sacral nerves. In contrast, having a patient lie supine following injection of a hyperbaric solution would produce a block up to about T6 as the local anesthetic settles down to the thoracic kyphosis of the spine. Isobaric solutions are less affected by patient position.",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "What is the mechanism of action of local anesthetics?",
          },
          {
            type: "text",
            content:
              "Local anesthetics block the transmission of nerve signals by blocking sodium channels. Although the mechanism has not been entirely elucidated, one theory is that the local anesthetic crosses the cell membrane in its non-ionic form and blocks the channel intracellularly. Therefore, one of the factors that determine onset time is the pKa of the local anesthetic.",
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content:
              "What are some important characteristics of different local anesthetics?",
          },
          {
            type: "text",
            content:
              "The two types of local anesthetics are amides and esters. Examples of amide local anesthetics are lidocaine, bupivacaine, and mepivacaine. Cocaine, procaine, and benzocaine are examples of ester local anesthetics. Amide local anesthetics are metabolized by the liver whereas esters are broken down by plasma pseudocholinesterases.\n\nOther important characteristics of the different local anesthetics to keep in mind are their duration of action and their maximal dose before toxicity occurs. Exceeding the maximal plasma concentration will cause central nervous system aberrations that start as tinnitus and tingling in the lips and may advance to seizures. Local anesthetics will also block cardiac conduction causing deleterious arrhythmias.\n\nCommonly used local anesthetics are lidocaine and bupivacaine. Lidocaine has a more rapid onset than bupivacaine and reaches peak block height at 10-15 minutes compared to 20 minutes or more, respectively. However, the duration of action of lidocaine is approximately an hour as a spinal anesthetic whereas bupivacaine may last up to 4 hours depending on the dose given. The maximum systemic dose of lidocaine without epinephrine is 4.5 mg/kg but with a spinal, the highest recommended dose is 100 mg. Bupivacaine has a greater potential for toxicity and the maximum dose is 2.5 mg/kg and for a spinal, 20 mg.",
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/6.png"),
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Brachial Plexus Anatomy",
          },
          {
            type: "text",
            content:
              "The brachial plexus originates from the C5-T1 nerve roots and they come together to form superior, middle, and inferior trunks. Each trunk then divides into anterior and posterior divisions which form the cords named after their relationship to the subclavian artery: lateral, medial, and posterior cords. The cords then finally divide into their terminal branches.",
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/5/7.png"),
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content:
              "What are different techniques to localize the brachial plexus?",
          },
          {
            type: "text",
            content:
              "The goal of regional anesthesia is to place local anesthetic around the nerve to block transmission of pain. Therefore, the needle must be placed adjacent to the nerves. Surface landmarks are used to identify the vicinity of the nerves; for example, the brachial plexus may be found 2 cm medial and 2 cm caudad to the coracoid process with a coracoid block. Using this as a starting point, a needle is inserted to pinpoint the nerve. Traditionally, this was achieved by illiciting a paresthesia sensation when the needle contacts the nerve and subsequently injecting the local anesthetic. Another technique is the use of a nerve stimulator which sends a small electrical signal down to the tip of the needle such that when the needle is close to the nerve, the corresponding muscle will “twitch” at a very low current. The newest technique is the use of a portable ultrasound machine, which allows for the visualization of nerves and needle placement in real time. The local anesthetic injected may also be visualized to ensure appropriate deposition around the nerve.\n\nSee following videos:\n\nhttps://www.youtube.com/watch?v=3X6smsrTHOs\n\nhttps://www.youtube.com/watch?v=YPRSDElCcqA",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content:
              "What are the potential complications of regional anesthesia?",
          },
          {
            type: "text",
            content:
              "Most of the complications of regional anesthesia are secondary to misplacement of the needle tip. The most common complication is block failure because the deposition of local anesthetic is not about the nerve. Damage to the nerve can also occur with the needle or intraneural injection of local anesthesia. The incidence of transient parasthesias lasting less than a month is in the order of 1/100 and more than a month is 1/10,000. Permanent nerve damage occurs at an incidence of 1 in 100,000. Depending on the block being performed, the injection of local anesthetic may cause seizures if injected into the vertebral artery or intrathecally. Other potential complications are phrenic nerve blockade, pneumothorax, bleeding, and infection.\n\nBecause the limb will be numb and possibly immobile, it is also important to prevent secondary complications. Care of the insensate limb involves maintaining it in a neutral position, keeping it well padded, and avoiding contact with anything that may cause tissue damage such as prolonged exposure to ice packs.",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Credits",
          },
          {
            type: "text",
            content:
              "Created By:\nJordan Meyers MD\n\nEdited by:\nAlan Tung MD\nBrian Merriman MD MSc FRCPC\n\nAdapted from work by:\nRaymond Tang MD FRCPC\nMichael Chuang MD",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Trauma Anesthesia, Fluid Management, and Blood Transfusion.",
    imageUrl: require("@/assets/images/modules/icon/6.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 6: Trauma Anesthesia, Fluid Management, and Blood Transfusion.",
          },
          {
            type: "text",
            content:
              "This online portion of this module is expected to take 60 min.",
          },
        ],
      },
      {
        id: "2",
        content: [
          { type: "header", content: "Objectives" },
          {
            type: "text",
            content:
              "1. Describe the basics of trauma anesthesia, including:\n   a. The primary and secondary survey of the trauma patient\n   b. Basic airway management of the trauma patient\n   c. Diagnosis of hypotension / shock\n   d. Basic management of hypotension / shock\n2. Describe the basics of blood transfusion medicine, including what constitutes a rational transfusion trigger point\n3. Define type, screen, and cross-match and describe their differences\n4. Outline some available blood products and describe their indications\n5. Describe complications of blood transfusion, including:\n   a. Immune-mediated reactions\n   b. Infections\n   c. Metabolic complications",
          },
        ],
      },
      {
        id: "3",
        content: [
          { type: "header", content: "Textbook readings:" },
          {
            type: "text",
            content:
              '1. Bromley S, Reid D. Chapter 21. Intravenous fluids and blood component therapy. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012.\n\n2. Clavel N, Hudson J. Chapter 22. Common perioperative problems. In: Sullivan P, editor. Ottawa Anesthesia Primer. Toronto: ECHO Book Publishing, 2012: 295-305 (softcover) or 286-296 (ebook).\n\nNote: The online component of this module will not review fluid compartments or different types of intravenous fluids. Those concepts are covered in first textbook reading. You may wish to review the MEDD 411 Week 13 (Electrolyte Disturbance) lecture "Homeostatic regulation of body fluids" by Dr. Peter Neufeld.',
          },
        ],
      },
      {
        id: "4",
        content: [
          { type: "header", content: "Credits" },
          {
            type: "text",
            content:
              "Created by\nSimon Adamson MD\n\nEdited by\nAlan Tung MD\nBrian Merriman MD MSc FRCPC\nPeter Choi MD MSc FRCPC\n\nAdapted from work by\nOliver Applegarth MD MEd FRCPC\nLindi Thibideau MD FRCPC\nMichael Chuang MD FRCPC",
          },
        ],
      },
      {
        id: "5",
        content: [
          { type: "header", content: "Introduction" },
          {
            type: "text",
            content:
              "You are starting an overnight call shift during an elective in anesthesiology when your preceptor receives a phone call from the emergency room: “Emergency medical services has just called to inform us of an incoming trauma patient who is looking in pretty poor shape. He is a 35-year old male who was involved in a high-speed motor vehicle crash and has sustained a compound femur fracture and other possible blunt injuries. The ambulance is approximately two minutes away.”\n\nYou and your preceptor hurry down to the trauma bay to prepare before the ambulance arrive.",
          },
        ],
      },
      {
        id: "6",
        content: [
          { type: "header", content: "Preparation" },
          {
            type: "text",
            content:
              "Before the patient arrives, you want to prepare for the technical and non-technical aspects of trauma management.",
          },
          { type: "header", content: "Technical preparation" },
          {
            type: "text",
            content:
              "Familiarize yourself with your surroundings and know where all the equipment is located (e.g., airway equipment including oxygen and suction; medications)\nSet up universal precautions (e.g., hand washing, gown, cap, mask, gloves)",
          },
          { type: "header", content: "Non-technical preparation" },
          {
            type: "text",
            content:
              "Introduce yourself to the rest of the trauma team and CLEARLY state your role in the resuscitation\nIf you are the trauma team leader (later in your career)\nDelegate appropriate roles to members of the team (e.g., individuals responsibel for airway management, physical exam, vascular access, record-keeping, etc.)\nAsk for any information that anyone may already have\nAsk for more help if needed\nArrange for consultations as needed",
          },
        ],
      },
      {
        id: "7",
        content: [
          { type: "header", content: "Trauma - Primary Survey" },
          {
            type: "text",
            content:
              "The patient arrives in the trauma bay. As you begin your primary survey, you ask for vital signs to be measured and monitors to be placed.\nVital signs: oxygen saturation (SpO2), respiratory rate (RR), heart rate (HR), blood pressure (BP), and temperature\nMonitors: pulse oximeter, 5-lead electrocardiogram, non-invasive blood pressure cuff",
          },
          {
            type: "text",
            content:
              "You take a moment to gather some more information from the paramedics. What do you want to know?\n\nWhat are the components of a SAMPLE history?",
          },
        ],
      },
      {
        id: "8",
        content: [
          { type: "header", content: "The SAMPLE History" },
          {
            type: "text",
            content:
              "The components of a SAMPLE history are:\nSigns and symptoms\nAllergies\nMedications\nPast medical history\nLast meal\nEvents surrounding the incident",
          },
          {
            type: "text",
            content:
              "You ask the patient some questions. He is slurring his words, but responds that his name is Howard. He says that his left leg and abdomen hurt. He is somewhat disoriented and isn’t really sure what’s going on. The last events he remembers are finishing up an overnight shift at work and driving home.\n\nThe paramedics give you some additional information. They tell you that he was previously healthy and has no allergies. He had had a front-on collision with a concrete barrier at high speed. Howard was conscious when the paramedics arrived. He was wearing his seatbelt and the airbags had deployed. There was quite a bit of blood at the scene and on his clothes.",
          },
        ],
      },
      {
        id: "9",
        content: [
          { type: "header", content: "Trauma - Primary Survey" },
          {
            type: "text",
            content:
              "As you take the history, the rest of the team has started the primary survey.\n\nUsing the ABCDE format, what are the components of a primary survey?",
          },
        ],
      },
      {
        id: "10",
        content: [
          { type: "header", content: "Trauma - Primary Survey" },
          {
            type: "text",
            content:
              "The components of a primary survey are:\nAirway and cervical spine control\nBreathing\nCirculation\nDisability\nExposure\nEnvironmental control\n\nNow let's explore what each of these involves in more detail...",
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "Primary Survey - Airway (and Cervical Spine Control)",
          },
          {
            type: "text",
            content:
              "Issues to consider:\nDoes the patient have hypoxia?\nIs the airway patent?\nCould airway patency become compromised in the future?\nIs the patient’s level of consciousness sufficient to prevent aspiration?\nIs there potential for injury to the cervical spine?",
          },
          {
            type: "text",
            content:
              "Look for:\nInspection: oxygen desaturation; cyanosis; stridor / hoarseness; other signs of airway obstruction; maxillofacial / oral / neck trauma",
          },
          {
            type: "text",
            content:
              "Things to do now:\nApply oxygen (nasal prongs, face mask, or CPAP / BiPAP) as needed\nRestrict* cervical spine motion with a cervical collar (assume unstable cervical spine until proven otherwise)\nRelieve any airway obstruction\n- suction oral cavity\n- manual maneuvers (chin lift, jaw thrust, but do not move neck)\n- nasopharyngeal airway (if patient is conscious and basal skull fractures are not suspected), oropharyngeal airway (if patient is unconscious)\n- definitive airway if needed (endotracheal intubation or surgical airway)†",
          },
          {
            type: "text",
            content:
              '* Older terminology refers to "cervical spine immobilization". The American College of Surgeons and its Advanced Trauma Life Support Program have moved to "cervical spinal motion restriction" as no technique completely immobilizes the spine.\n\n† Indications for endotracheal intubation were covered in Anesthesiology Learning Modules 2 (Airway Management) and 3 (Hypoxia). Please review them if you do not remember the indications.',
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "header",
            content: "Cervical Spine Control During Tracheal Intubation",
          },
          {
            type: "text",
            content:
              'It is not certain exactly what constitutes a "stable spine" and what degree of movement is dangerous. However, it is generally accepted that the cervical spine should be stabilized as much as possible during airway management in a patient at risk for cervical spine injury to prevent iatrogenic worsening of a pre-existing injury.',
          },
          {
            type: "text",
            content:
              "Simple airway management techniques such as a jaw thrust and head extension with bag mask ventilation and positioning in the sniffing position for laryngoscopy can cause significant cervical spine movement.",
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content: "Cervical Spine Control During Tracheal Intubation",
          },
          {
            type: "text",
            content:
              "Some strategies have been developed to minimize movement:\n- Sandbags propped around a patient's head and neck can reduce lateral movement of the cervical spine while still allowing for effective airway management.\n- Manual in-line stabilization, when an assistant firmly places their hands on the sides of the patient's head, can be used to maintain a neutral cervical spine position.\n- Head and chin straps can also be used to immobilize the cervical spine without impeding airway management.\n\nWhile a hard cervical collar should be used to decrease movement when airway management is unnecessary, the collar impedes direct laryngoscopy (and surgical airway techniques); therefore, it is removed during insertion of a definitive airway and reapplied after the airway is secured.",
          },
          {
            type: "text",
            content:
              "Stabilizing the cervical spine during airway management can be challenging. At the end of the day, if you cannot effectively manage a patient's airway with the stabilization technique you've chosen, either try a new one or abandon it. Airway management takes priority. (Note: If you are anticipating this level of difficulty, you should be calling for help from an airway expert.)",
          },
        ],
      },
      {
        id: "14",
        content: [
          { type: "header", content: "Primary Survey - Breathing" },
          {
            type: "text",
            content:
              "Issues to consider:\nDo the patient have an increased work of breathing?\nAre there any signs or symptoms of chest pathology?\nIdentify urgent life-threatening injuries:\n- tension pneumothorax\n- flail chest and pulmonary contusion\n- massive hemothorax\n- open pneumothorax",
          },
          {
            type: "text",
            content:
              "Look for:\nInspection: abnormal respiratory rate or pattern of breathing, asymmetric chest wall expansion, flail chest, open wounds\nPalpation: tracheal deviation, subcutaneous emphysema, broken ribs\nPercussion: hyperresonance (suggestive of pneumothorax)\nAuscultation: absent or unequal breath sounds in lung fields",
          },
          {
            type: "text",
            content:
              "Things to do now:\nAssist ventilation if decreased respiratory rate or apnea (bag-mask ventilation or mechanical ventilation)",
          },
        ],
      },
      {
        id: "15",
        content: [
          { type: "header", content: "Case" },
          {
            type: "image",
            content: require("@/assets/images/modules/6/1.png"),
          },
        ],
      },
      {
        id: "16",
        content: [
          { type: "header", content: "Case Solved" },
          {
            type: "image",
            content: require("@/assets/images/modules/6/2.png"),
          },
        ],
      },
      {
        id: "17",
        content: [
          { type: "header", content: "Case" },
          {
            type: "image",
            content: require("@/assets/images/modules/6/3.png"),
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Primary Survey - Circulation",
          },
          {
            type: "text",
            content:
              "Issues to consider:\nPatients can look stable and suddenly deteriorate - assume a patient has a source of bleeding and is in shock on arrival until proven otherwise.\nIs there any (hidden) internal bleeding?  Areas of greatest suspicion are the chest, abdomen, retroperitoneum, pelvis, and long bones.",
          },
          {
            type: "text",
            content:
              "Look for:\nAbnormal heart rate or rhythm\nHypotension with or without orthostatic changes\nAbnormal capillary refill, skin colour, and temperature\nAltered level of consciousness\nEvidence of internal and external bleeding",
          },
          {
            type: "text",
            content:
              'Things to do now:\nInsert two large-diameter ("large bore") peripheral intravenous catheters (short 14- or 16-gauge).\nFluid resuscitate with 1 L warmed isotonic crystalloid if hypotensive. Transfuse blood products if still no or transient response.\nInitiate early control of hemorrhage - call for appropriate help (e.g., surgeon, interventional radiology)\nGet STAT bloodwork (e.g., ABG, CBC, INR, PTT, lytes, urea, Cr, glucose, etc.)',
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "header",
            content: "Primary Survey - Disability",
          },
          {
            type: "text",
            content:
              "Issues to consider:\nThe fastest way to assess ABCD is to talk to the patient: What is your name?  Where are you?  What is the month and day?  What happened?\nWorry if a patient cannot answer you correctly in clear, coherent language.\nIdentify urgent life-threatening injuries\nincreased intracranial pressure\nspinal shock",
          },
          {
            type: "text",
            content:
              "Look for:\nGlasgow Coma Scale score\nAbnormal pupil size or response to light, or pupillary asymmetry\nHypertension, bradycardia, and irregular breathing (triad of the Cushing reflex) suggestive of increased intracranial pressure\nAbsence of movement of upper or lower limbs or other localizing neurological deficits suggestive of spinal cord injury\nHypotension, bradycardia, and warm skin (vasodilation) suggestive of spinal shock",
          },
          {
            type: "text",
            content:
              "Things to do now:\nIf increased intracranial pressure is suspected\nconsult neurosurgery STAT\nraise head of bed to 30 degrees\nmild hyperventilation (PaCO2 30-35 mmHg)\nmaintain systolic blood pressure above 100 mmHg\nIf acute spinal cord injury is suspected\nconsult neurosurgery or orthopedics surgery\nmaintain adequate perfusion to the spinal cord (e.g., mean arterial pressure above 80 mmHg)",
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/4.png"),
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/5.png"),
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/6.png"),
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/7.png"),
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/8.png"),
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/9.png"),
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "Case",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/10.png"),
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "Primary Survey - Exposure and Environmental Control",
          },
          {
            type: "text",
            content:
              "Exposure \nCompletely undress the patient to examine fully for other injuries, particularly for bleeding sources. \nMake sure to log roll and examine the patient’s back.\n\nEnvironmental control \nAvoid hypothermia by covering the patient with a warm blanket.\nEmploy active warming techniques (e.g., warmed intravenous fluids, forced air warming blankets).",
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/11.png"),
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/12.png"),
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Vascular Access",
          },
          {
            type: "text",
            content:
              'A little more information about some of the other options for vascular access:\n\nCentral venous catheters ("central lines")\nConsider inserting a central venous catheter if peripheral veins cannot be accessed or if vasopressor infusions will be needed.\nInsertion must be done under sterile conditions (and usually using ultrasound guidance). Insertion is technically more difficult, time consuming, and uncomfortable (in conscious patients) compared to peripheral IV catheter insertion.\nInternal jugular, subclavian, and femoral veins are common access sites in critically ill patients for central venous catheters.\nThere are more complications associated with central venous catheters.\n\nIntraosseous infusion\nInvolves injecting fluids directly into the vessel-rich marrow of a bone. \nIntraosseous access is very fast and is accomplished using a small task-specific drill, typically into the tibia or humeral head. \nIs a great alternative if a patient needs rapid vascular access and peripheral veins cannot be accessed.',
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              "The patient's vital signs and primary survey results are detailed below. As you read through the details, try to form a general gestalt about the well-being of the patient and pick out any specifics that concern you. Ask yourself, “Am I worried about this patient?”\n\nVital signs \nSpO2 99%, RR 30/min, HR 125/min, BP 110/65 mmHg, temperature 36.5 degrees Celsius \nAirway and cervical spine control\nPatent without evidence of impending obstruction\nHe is wearing a hard cervical collar for restrict cervical motion\nBreathing\nTachypneic\nNo signs of respiratory distress\nTrachea is midline; tender along the left lower ribs anteriorly; no open chest wound, obvious deformities, or subcutaneous emphysema\nNo hyperresonance\nBreath sounds are equal bilaterally",
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Our Case",
          },
          {
            type: "text",
            content:
              'Circulation\nTachycardic; blood pressure is currently normal\nOpen fracture of left femur that has been placed into a traction device for reduction\nBruising along abdomen which is slightly distended and tender to palpation\nTwo 14-gauge peripheral IV catheters have been inserted (one in each forearm)\n\nDisability\nEyes are open; pupils are round, symmetrical, and reactive to light\nWhen asked for his name ("Howard"), current location, and the present date, he gives you his correct name, but an incorrect location and date\nHe doesn\'t squeeze your hands when you ask him, but he does try to swat you away when you press down painfully onto his finger nails\n\nExposure/environment: \nHe is stripped of his clothing and is log-rolled to the side for a full exposure. No additional injuries are identified.\nHe is then covered with a warm blanket.\nWhat is his Glasgow Coma Score score?',
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/13.png"),
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/14.png"),
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/15.png"),
          },
        ],
      },
      {
        id: "36",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/16.png"),
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/17.png"),
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/18.png"),
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/19.png"),
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/20.png"),
          },
        ],
      },
      {
        id: "41",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/21.png"),
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/22.png"),
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/23.png"),
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/24.png"),
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/25.png"),
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/26.png"),
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/27.png"),
          },
        ],
      },
      {
        id: "48",
        content: [
          {
            type: "header",
            content: "Blood products",
          },
          {
            type: "text",
            content:
              "Platelets and plasma are the predominant other products to consider in trauma. They contain important components that allow for clot formation and hemostasis (see table below) and become particularly important in cases that require massive transfusion (where large amounts of red blood cells are given) so that dilutional coagulopathy is not precipitated.",
          },
          {
            type: "text",
            content:
              "Prothrombin concentrate complex (PCC) contains the Vitamin K-dependent clotting factors II, VII, IX, and X and is used in the emergent reversal of warfarin.",
          },
          {
            type: "text",
            content:
              "Vitamin K is used to reverse the effects of warfarin for non-emergent reasons.",
          },
          {
            type: "text",
            content: "Protamine reverses the effects of heparin.",
          },
          {
            type: "text",
            content:
              "Recombinant Factor VIII is used primarily in the management of hemophilia A.",
          },
          {
            type: "image",
            content: require("@/assets/images/modules/6/28.png"),
          },
        ],
      },
      {
        id: "49",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/29.png"),
          },
        ],
      },
      {
        id: "50",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/30.png"),
          },
        ],
      },
      {
        id: "51",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/31.png"),
          },
        ],
      },
      {
        id: "52",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/32.png"),
          },
        ],
      },
      {
        id: "53",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/33.png"),
          },
        ],
      },
      {
        id: "54",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/34.png"),
          },
        ],
      },
      {
        id: "55",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/35.png"),
          },
        ],
      },
      {
        id: "56",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/36.png"),
          },
        ],
      },
      {
        id: "57",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/37.png"),
          },
        ],
      },
      {
        id: "58",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/38.png"),
          },
        ],
      },
      {
        id: "59",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/39.png"),
          },
        ],
      },
      {
        id: "60",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/40.png"),
          },
        ],
      },
      {
        id: "61",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/41.png"),
          },
        ],
      },
      {
        id: "62",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/42.png"),
          },
        ],
      },
      {
        id: "63",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/43.png"),
          },
        ],
      },
      {
        id: "64",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/44.png"),
          },
        ],
      },
      {
        id: "65",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/45.png"),
          },
        ],
      },
      {
        id: "66",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/46.png"),
          },
        ],
      },
      {
        id: "67",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/47.png"),
          },
        ],
      },
      {
        id: "68",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/48.png"),
          },
        ],
      },
      {
        id: "69",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/49.png"),
          },
        ],
      },
      {
        id: "70",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/50.png"),
          },
        ],
      },
      {
        id: "71",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/51.png"),
          },
        ],
      },
      {
        id: "72",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/52.png"),
          },
        ],
      },
      {
        id: "73",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/53.png"),
          },
        ],
      },
      {
        id: "74",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/54.png"),
          },
        ],
      },
      {
        id: "75",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/55.png"),
          },
        ],
      },
      {
        id: "76",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/6/56.png"),
          },
        ],
      },
      {
        id: "77",
        content: [
          {
            type: "text",
            content:
              "You and your preceptor perform a rapid-sequence induction with etomidate and the patient's larynx is visualized using video laryngoscopy with in-line cervical stabilization. You insert a 8.0-mm tracheal tube.",
          },
          {
            type: "text",
            content:
              "The patient is then taken to the operating room for an exploratory laparotomy. He requires numerous units of red blood cells, platelets, and plasma during the surgery. He is found to have a ruptured spleen and a splenectomy is performed to stop the bleeding. He is transferred to the intensive care unit postoperatively. He remains intubated and ventilated overnight. The next day, his ventilation is weaned and he is extubated after meeting extubation criteria. He is discharged home one week later.",
          },
        ],
      },
      {
        id: "78",
        content: [
          {
            type: "header",
            content: "Congrats on finishing the module",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Pediatric Anesthesiology",
    imageUrl: require("@/assets/images/modules/icon/9.png"),
    slides: [
      {
        id: "1",
        content: [
          {
            type: "header",
            content:
              "Welcome to Anesthesiology Learning Module 9: Pediatric Anesthesiology",
          },
          {
            type: "text",
            content: "This module is expected to take 30 minutes.",
          },
        ],
      },
      {
        id: "2",
        content: [
          {
            type: "header",
            content: "Objectives",
          },
          {
            type: "text",
            content:
              "1. Describe the key differences in pediatric patients compared to adults in regards to airway anatomy, respiratory physiology, and cardiovascular physiology\n2. Determine using the appropriate formulae:\n    a. The dose for intravenous maintenance fluids\n    b. The age-appropriate endotracheal tube size\n    c. The age-appropriate endotracheal tube depth\n3. Describe the key differences in pediatric pharmacology, including both pharmacokinetics and pharmacodynamics, and how they affect drug selection for anesthesia",
          },
        ],
      },
      {
        id: "3",
        content: [
          {
            type: "header",
            content: "Credits",
          },
          {
            type: "text",
            content:
              "Created by\nNatasha Broemling MD FRCPC\n\nEdited by:\nSimon Adamson MD\nAlan Tung MD\nBrad Merriman MD MSc FRCPC\nPeter Choi MD MSc FRCPC",
          },
        ],
      },
      {
        id: "4",
        content: [
          {
            type: "header",
            content: "The Pediatric Patient",
          },
          {
            type: "text",
            content:
              "This module highlights specific differences between pediatric and adult anesthesia practice. Our approach to the child begins with preoperative assessment, including recognition of abnormal vital signs and fluid management for optimization of the child for surgery. Built into the anesthetic management of the child are relevant differences in pharmacology, options for anesthetic induction, airway anatomy and management, and respiratory and cardiac physiology. We conclude with emergence from anesthesia, with the attendant concerns of analgesia, emergence delirium, and maladaptive behaviour changes.",
          },
        ],
      },
      {
        id: "5",
        content: [
          {
            type: "header",
            content: "Preoperative Assessment of the Child",
          },
          {
            type: "text",
            content:
              "Family-centered care begins with the preoperative assessment.* By adapting hospital processes to be flexible and receptive to family / patient input about management of care, the anesthesiologist is also recognizing that the caregivers of children with complex medical issues and / or developmental disability have much to contribute to their better understanding of the child.\n\nHistory is generally obtained from a caregiver and / or child depending on the family dynamic and circumstances.\n\nGrowth and feeding are used as surrogate markers for physical activity in infants.\n\n* Committee on Hospital Care, AAP. Family-centered care and the pediatrician's role. Pediatrics 2003; 112(3):691-7.",
          },
        ],
      },
      {
        id: "6",
        content: [
          {
            type: "header",
            content: "Preoperative Assessment of the Child",
          },
          {
            type: "text",
            content:
              "The physical exam can be difficult if the child is uncooperative. Lethargy is a useful but non-specific sign of illness in children. Vital signs should be compared to age-specific norms.\n\nBlood sampling (e.g., for group and screen) is sometimes delayed until after induction to avoid additional awake venipuncture.\n\nSeparation anxiety is common in children greater than one year of age. Optimization of the patient for induction of anesthesia may include sedative premedication (often with oral midazolam or intranasal dexmedetomidine) and / or parental presence at induction.",
          },
        ],
      },
      {
        id: "7",
        content: [
          {
            type: "header",
            content: "Pediatric Preoperative Fasting Guidelines",
          },
          {
            type: "text",
            content:
              "The goal of fasting is to reduce the risk of pulmonary aspiration while avoiding dehydration and hypoglycemia. Gastric emptying of clear liquids is now recognized to be very rapid and, in children, lenient guidelines improve compliance.\n\nNew evidence supporting a one-hour clear fluid fast is accumulating and permits the anesthesiologist to minimize delivery of intravenous fluids and sugars.\n\nThe latest consensus statement* suggests the following:\nClear fluids = 1 hour\nBreast milk = 4 hours\nSolids and non-clear fluids (including milk and formula) = 6 hours\n\nHowever, not all institutions have adopted this suggestion so make sure you respect your institution-specific guidelines.\n\n* Thomas M, Morrison C, Newton R, et al. Consensus statement on clear fluids fasting for elective pediatric general anesthesia. Pediatr Anesth 2018; 28(5):411-4. Available at: http://onlinelibrary.wiley.com/doi/10.1111/pan.13370",
          },
        ],
      },
      {
        id: "8",
        content: [
          {
            type: "header",
            content: "Pediatric Airway - Anatomy*",
          },
          {
            type: "text",
            content:
              "With regards to pediatric airway, there are several important anatomical differences to be aware of that can affect airway management in infants:\n- A shoulder roll may help align structures for laryngoscopy as the infant head is relatively large and predisposed to neck flexion.\n- The infant epiglottis is long, narrow, and difficult to lift indirectly using a curved laryngoscopy blade positioned in the vallecula. A straight blade lifts the epiglottis directly and is often preferred in younger infants.\n- The infant larynx is more cephalad than it is in adults. In infants, it is level with the C3-4 vertebrae rather than C4-5. This can make laryngoscopy more difficult as the larynx appears very anterior.\n- The infant vocal cords are angled anteriorly (versus perpendicular to the trachea in adults). An endotracheal tube may get hung up at the cords during insertion. Twisting the tube as it passes through the cords usually resolves the problem.",
          },
          {
            type: "text",
            content:
              '* Normal adult airway anatomy was covered in MEDD 412 Week 32 "Anatomy of the Upper Airways" lecture and lab and in MEDD 431 Anesthesiology Learning Module 2 "Airway Management".\nFor enrichment only: For a very detailed review, please see Adewale L. Anatomy and assessment of the pediatric airway. Pediatr Anesth 2009; 19(Suppl 1):1-8.',
          },
        ],
      },
      {
        id: "9",
        content: [
          {
            type: "header",
            content: "Pediatric Airway - Anatomy*",
          },
          {
            type: "text",
            content:
              "Another important difference in children is that the narrowest part of the airway is the cricoid cartilage. This is in contrast to adults where the narrowest part is the vocal cord.\n\nBecause of this, an endotracheal tube that easily passes through the vocal cords may still compromise capillary perfusion at the cricoid. This may result in edema and stridor after extubation.\n\nTo decrease the risk of edema and stridor, maintaining an air leak that is less than 20-25 cmH20 helps prevent this.\n\nThe thyroid and cricoid cartilages reach adult sizes by 10-12 years of age.",
          },
          {
            type: "text",
            content:
              '* Normal adult airway anatomy was covered in MEDD 412 Week 32 "Anatomy of the Upper Airways" lecture and lab and in MEDD 431 Anesthesiology Learning Module 2 "Airway Management".\nFor enrichment only: For a very detailed review, please see Adewale L. Anatomy and assessment of the pediatric airway. Pediatr Anesth 2009; 19(Suppl 1):1-8.',
          },
        ],
      },
      {
        id: "10",
        content: [
          {
            type: "header",
            content:
              "Pediatric Airway - Upper Respiratory Tract Infection and Complications",
          },
          {
            type: "text",
            content:
              "A history of recent upper respiratory tract infection (within the previous two weeks) is associated with an increased risk for bronchospasm, laryngospasm, and desaturation.*\n\nThis is particularly the case in children with reactive airways disease (asthma).\n\nThe decision to postpone surgery is made individually.",
          },
          {
            type: "text",
            content:
              "* von Ungern-Sternberg BS, Boda K, Chambers NA, et al. Risk assessment for respiratory complications in paediatric anaesthesia: a prospective cohort study. Lancet 2010; 376(9743):773-83.",
          },
        ],
      },
      {
        id: "11",
        content: [
          {
            type: "header",
            content: "Pediatric Airway - Bag-Mask Ventilation",
          },
          {
            type: "text",
            content:
              'Bag-mask ventilation in pediatric patients can also be difficult. This is for a couple reasons:\n- Most newborns are obligate nose breathers\n- In toddlers, obstruction due to adenotonsillar hypertrophy is common\n\nIn both situations, an oropharyngeal airway can be very helpful.\n\nAnother point to remember is about teeth. The deciduous ("milk" or "baby") teeth erupt between six months and two years of age. Check for loose teeth in children 5-10 years of age.',
          },
        ],
      },
      {
        id: "12",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/1.png"),
          },
        ],
      },
      {
        id: "13",
        content: [
          {
            type: "header",
            content: "Pediatric Airway - Intubation",
          },
          {
            type: "text",
            content:
              "Depth of insertion and rigorous securement are critical in infants as the very short trachea predisposes to both endobronchial intubation and accidental extubation.\n\nAlthough the length of the trachea is 15 cm by late adolescents, it is only 5 cm in a term neonate and even shorter in premature neonates.\n\nThe proximal end of the cuff should be passed just beyond the vocal cords. Formulae for approximate verification of depth are as follows:\n- Neonates: weight (in kg) + 6 cm = approximate depth measured at the gums\n- Older children: age (in years) + 10 cm = approximate depth measured at the teeth\n\nIf the endotracheal tube is inserted too deeply, it may go down the right mainstem bronchus. As you may know, the right mainstem bronchus is less angulated and larger than the left side.\n\nWhen in doubt, one may consider advancing the tube until breath sounds diminish on the left (suggesting that the tube has gone into the right mainstem bronchus), then pulling back a bit until the breath sounds are equal to the right side.",
          },
        ],
      },
      {
        id: "14",
        content: [
          {
            type: "header",
            content: "Pediatric Airway - Summary",
          },
          {
            type: "text",
            content:
              "To summarize the key points of pediatric airways:\nKey differences in infants compared to adults:\n- The head is relatively large compared to the body, causing neck flexion\n- The epiglottis is long, narrow, and floppy\n- The vocal cords are angled anteriorly\n- The vocal cords are more cephalad (C3-4)\n- The narrowed part is the cricoid cartilage\n- Bag-valve mask ventilation can be challenging in newborns and toddlers due to obligate nasal breathing and adenotonsillar hypertrophy, respectively\n- Tube sizing is very important and changes significantly with age\n- Children, especially neonates, have short tracheas putting them at risk for endobronchial intubation and accidental extubation",
          },
        ],
      },
      {
        id: "15",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Respirology*",
          },
          {
            type: "text",
            content:
              "Key points regarding respiratory physiology in children:\n- Children desaturate rapidly with apnea.\n- Children maintain functional residual capacity (FRC) through laryngeal braking and respiratory muscle tone.\n- Respiration is diaphragm-dependent in children.",
          },
          {
            type: "text",
            content:
              "* Basic respiratory physiology was introduced in lectures in MEDD 411 Week 6 (Pneumonia / Cough) and Week 7 (COPD).",
          },
        ],
      },
      {
        id: "16",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Respirology",
          },
          {
            type: "text",
            content:
              "An important aspect of respiratory physiology is the small absolute size of the individual airways.\n\nTherefore, endothelial swelling and mucus production can all cause dangerously large drops in airway caliber. Decrease in the airway caliber can make mechanical ventilation challenging and can lead to hypoxemia.",
          },
        ],
      },
      {
        id: "17",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Respirology",
          },
          {
            type: "text",
            content:
              "Time to desaturation is dependent on the functional residual capacity (FRC) and the oxygen consumption rate.\n\nIf you remember, FRC is defined as the equilibrium point of the respiratory system - where the natural tendency of the lungs to collapse is balanced by the natural tendency of the rib cage to expand. In normal healthy adults this is a passive equilibrium.\n\nInfants and young children have a compliant chest wall (the cartilaginous rib cage ossifies over time to support upright posture). FRC is maintained close to that of an adult (per kg) through laryngeal braking and intercostal muscle tone to stabilize the cartilaginous chest wall.\n\nElastic lung tissue is still developing in children up to 10 years old; therefore, their small airways and alveoli are prone to collapse. With loss of consciousness, laryngeal braking and intercostal muscle tone are lost. This results in small airway closure, atelectasis, right-to-left shunting, and rapid desaturation.\n\nFurthermore, children have high oxygen consumption rates (VO2, 6 to 10 mL/kg/min in children vs. 3.5 mL/kg/min) and this further predisposes them to rapid desaturation.",
          },
        ],
      },
      {
        id: "18",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Cardiology*",
          },
          {
            type: "text",
            content:
              "Cardiac output (CO) in infants is rate-dependent.\nThis is because ventricular compliance is relatively low and stroke volume (SV) is fixed. By the formula CO = HR x SV, the only way for infants to increase cardiac output is through increases in heart rate.\n\nThe autonomic control of the heart is a continuous balance between parasympathetic and sympathetic nervous systems. Children, in particular infants, have relatively poorly developed sympathetic innervation and parasympathetic (i.e., vagal) elements can often dominate. This is why the bradycardic response to hypoxemia is pronounced in infants (especially neonates) and hypoxemia should be avoided.\n\nRelative to adults, the immaturity of the sympathetic nervous system is also responsible for children's predisposition to bradycardia with procedures such as laryngoscopy or nasogastric tube placement.\n\nCardiac output when corrected for weight is very high at birth (~400mL/kg/min) and decreases over the first few months of life (to ~200 mL/kg/min).",
          },
          {
            type: "text",
            content:
              '* The determinants of cardiac output was covered in MEDD 411 Week 9 (Hypertension) "Physiology of Blood Pressure Control".',
          },
        ],
      },
      {
        id: "19",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/2.png"),
          },
        ],
      },
      {
        id: "20",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Hematology",
          },
          {
            type: "text",
            content:
              "Due to differences between children and adults, you must consider the following when ordering blood transfusions in children:\n- Infants less than 4 months old must be given O-type packed red blood cells (PRBC) or type-specific for the neonate's ABO group, any circulating maternal antibodies, and Rh(D) compatible for both the neonate and the mother. Transfusion is appropriate at higher thresholds (Hb > 80 g/L) in the presence of more complicated comorbid conditions.\n- Children 4 months or older are generally transfused to maintain Hb > 70 g/L.\n- Infants and children are particularly at risk for hyperkalemia with large-volume transfusions. Fresh blood may be preferred but aliquoted to minimize donor exposure.\n- Certain pediatric populations require:\n    - irradiated blood products to reduce transfusion-related graft-versus-host disease and/or\n    - leukoreduced blood products to reduce the risk of cytomegalovirus (CMV) infection.",
          },
          {
            type: "text",
            content:
              "* Lau W. Chapter 13: Neonatal and pediatric transfusion. In: Clinical Guide to Transfusion. Canadian Blood Services, August 2017.",
          },
        ],
      },
      {
        id: "21",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Fluid Management",
          },
          {
            type: "text",
            content:
              "Fluid management typically needs to be more stringent in children than in adults as there is less room for error.\n\nThe 4-2-1 Rule (in mL/h) is used to estimate hourly maintenance fluid requirements in children:\n\n- 4 mL/kg for every kg up to 10 kg of body weight\n- 2 mL/kg for every kg from 10 to 20 kg of body weight\n- 1 mL/kg for every kg of body weight over 20 kg\n\nSome examples:\n\n- 6 kg baby: (4 x 6) = 24 mL/h\n- 15 kg toddler: (4 x 10) + (2 x 5) = 50 mL/h\n- 42 kg child: (4 x 10) + (2 x 10) + (1 x 22) = 82 mL/h",
          },
        ],
      },
      {
        id: "22",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Fluid Management",
          },
          {
            type: "text",
            content:
              "Keep in mind that not all perioperative patients require fluid therapy.\n\nModern anesthetic practice is moving toward more restrictive fluid management in children and adults. In children, a restrictive fluid management strategy would be:\n\n- 50 to 80% of calculated hourly maintenance fluid requirement, or\n- fluid requirement calculated based on insensible losses per body surface area (300-400 mL/m2/24 h) + urine output\n\nNeonates require less fluids until they begin postnatal diuresis.\n\nFor enrichment: For further details, please see the National Institute for Health and Care Excellence (NICE) Guideline 29: Intravenous fluid therapy in children and young people in hospital, December 2015.",
          },
        ],
      },
      {
        id: "23",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Glucose",
          },
          {
            type: "text",
            content:
              "Hypoglycemia\n- Premature infants and neonates are susceptible to hypoglycemia, as are older children who are NPO for an extended period or who have certain comorbidities (e.g., diabetes mellitus, CPT-1 deficiency, recently stopped total parenteral nutrition).\n- Hypoglycemia can cause permanent brain damage and is difficult to detect clinically in anesthetized patients.\n- High-risk patients may require IV dextrose and regular perioperative serum glucose monitoring.",
          },
        ],
      },
      {
        id: "24",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Sodium",
          },
          {
            type: "text",
            content:
              "Iatrogenic hyponatremia\n- Syndrome of inappropriate anti-diuretic hormone secretion (SIADH) is common in hospitalized patients, often leading to free-water retention and hyponatremia.\n- Children are more likely than adults to develop cerebral edema secondary to acute hyponatremia causing brain swelling. In addition, a child's larger brain-to-cranium ratio (compared to an adult) means there is less room for the brain to expand and shorter time to develop raised intracranial pressure.\n- Avoidance of hypotonic fluids in ill or postoperative children helps prevent permanent brain damage or death.\n- Daily electrolyte measurements are recommended in all children receiving IV fluids.",
          },
        ],
      },
      {
        id: "25",
        content: [
          {
            type: "header",
            content: "Pediatric Physiology - Summary",
          },
          {
            type: "text",
            content:
              'To summarize the key points:\n- Infants and children are prone to rapid desaturation\n- Cardiac output of infants is relatively heart-rate dependent\n- Young children are susceptible to vagal responses, including hypoxia-induced bradycardia\n- Fetal hemoglobin has a high affinity to oxygen\n- Maintenance fluid rate may be calculated using the "4-2-1 Rule"\n- Children are susceptible to hypoglycemia and hyponatremia',
          },
        ],
      },
      {
        id: "26",
        content: [
          {
            type: "header",
            content: "Pediatric Pharmacology*",
          },
          {
            type: "text",
            content:
              "Although the same drugs are frequently used in children and adults, altered pharmacokinetics and pharmacodynamics can significantly alter dosing (loading dose, maintenance dose, dosing interval).\n\nPharmacokinetics = what the body does to the drug (ADME = absorption, distribution, metabolism, excretion)\nPharmacodynamics = what the drug does to the body (mechanism of action, potency, etc.)\n\nDosing is calculated individually for each patient based on either weight or body surface area.\n\nCare must be taken to avoid drug errors (particularly tenfold decimal errors).",
          },
          {
            type: "text",
            content:
              "* Pharmacology of specific classes of drugs is covered in MEDD 431 Anesthesiology Learning Module 7: Basic Anesthetic Pharmacology.",
          },
        ],
      },
      {
        id: "27",
        content: [
          {
            type: "header",
            content: "Pediatric Pharmacology",
          },
          {
            type: "text",
            content:
              "Compared to adults:\n- Lower albumin levels result in less protein binding and higher plasma levels of available, unbound drug\n- Total body water (TBW) is higher:\n    - Preterm: TBW = 85% of body mass\n    - Infant: TBW = 75% of body mass\n    - Child: TBW = 70% of body mass\n    - Adult: TBW = 55-60% of body mass\n- For water-soluble drugs, the higher TBW means a larger volume of distribution in which drugs can redistribute, often necessitating higher initial loading doses to achieve steady state\n- Immature hepatic function may delay metabolism\n- Immature renal function may delay excretion",
          },
        ],
      },
      {
        id: "28",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - Key Concepts",
          },
          {
            type: "text",
            content:
              "Although pediatric anesthesiology can seem daunting, it helps to keep things organized and take the same approach that you have learned for adults by taking into account:\n- Patient factors relating to anatomy, physiology, and comorbid conditions\n- Surgical factors such as positioning, the type of incision planned, and expected pain profile\n- Anesthetic factors such as monitoring requirements and the pharmacology of various medications",
          },
        ],
      },
      {
        id: "29",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - General Anesthesia",
          },
          {
            type: "text",
            content:
              "When a child has been assessed and optimized for elective or urgent surgery, they are then brought to the operating room.\n\nInduction of anesthesia can be managed by administration of intravenous or inhalational medications.  Depending on the cooperativity and the stability of the child's medical condition, monitors and/or oxygen are applied before or during induction.\n\nUnderstanding pediatric pharmacology and physiology becomes central in maintaining homeostasis during anesthesia.",
          },
        ],
      },
      {
        id: "30",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - General Anesthesia*",
          },
          {
            type: "text",
            content:
              "General anesthesia can be split into two techniques: total intravenous anesthesia and inhalational volatile anesthesia.\n\nTotal intravenous anesthesia (TIVA) is more commonly used in children than in adults.\n\nTIVA has certain advantages that make it a particularly useful technique in children, such as:\n- Decreased airway reactivity\n- Less frequent emergence delirium\n- Because TIVA dosing is weight-based, it is economically viable for general use in children (due to the small amounts used).\n\nIn contrast, the cost of TIVA has led to its selective use in adults despite its numerous advantages.",
          },
          {
            type: "text",
            content:
              '* General anesthesia was covered in the lecture in MEDD 412 Week 29 (Head Injury) "Pharmacology of General Anesthetics".',
          },
        ],
      },
      {
        id: "31",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - General Anesthesia*",
          },
          {
            type: "text",
            content:
              'Inhalational anesthesia:\n- Induction of anesthesia with an inhaled anesthetic is a useful technique in children who may be uncooperative with IV insertion even when topical anesthesia is used.\n- Sevoflurane, with or without nitrous oxide, is well-tolerated by face mask and allows rapid induction.\n\nCare must be taken not to stimulate the patient in any way until the surgical anesthesia stage (or "deep plane of anesthesia") is reached because of the risk of laryngospasm (reflex closure of the vocal cords) in the earlier stages of anesthesia (i.e., stage of analgesia / disorientation and stage of excitement).',
          },
          {
            type: "text",
            content:
              '* General anesthesia was covered in the lecture in MEDD 412 Week 29 (Head Injury) "Pharmacology of General Anesthetics".',
          },
        ],
      },
      {
        id: "32",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - Postoperative Analgesia*",
          },
          {
            type: "text",
            content:
              "Drugs used for postoperative analgesia:\n- Preoperative administration of oral acetaminophen and ibuprofen may be adequate analgesia for ambulatory surgery or be the foundation for multimodal analgesia.\n- Opiates may be delivered intermittently or as a continuous infusion. Codeine is no longer prescribed for children.\n\nRegional anesthesia for postoperative analgesia:\n- Caudal anesthesia may be preferred to spinal anesthesia in small children because the spinal cord extends down to L3 in infants rather than ending at L1 as in adults.\n- Access to the caudal epidural space via the sacral hiatus is more reliable in children below 7 years of age and provides neuraxial anesthesia and analgesia for surgeries within the pelvis and lower limbs.",
          },
          {
            type: "text",
            content:
              '* The pharmacology of analgesics was covered in the lecture in MEDD 412 Week 30 (Headache and Pain) "Pharmacology of Drugs Used in Acute Pain".',
          },
        ],
      },
      {
        id: "33",
        content: [
          {
            type: "header",
            content: "Pediatric Anesthesia - Recovery in Children",
          },
          {
            type: "text",
            content:
              "Emergence delirium*:\n- occurs most commonly in children 1 to 5 years of age\n- characterized by no eye contact, no purposeful action, and no awareness of surroundings\n- crying may be distressing to caregivers\n- restlessness may disrupt surgical closure\n- in some cases it may require pharmacotherapy to terminate\n\nMaladaptive behavioural change:\n- may occur after any hospitalization\n- insomnia, eating disturbance, anxiety, regression, and/or aggression typically resolves within 2 weeks\n- incidence increases in the presence of emergence delirium",
          },
          {
            type: "text",
            content:
              "* Mason K. Paediatric emergence delirium: a comprehensive review and interpretation of the literature. Br J Anaesth 2017; 118(3):335-43.",
          },
        ],
      },
      {
        id: "34",
        content: [
          {
            type: "header",
            content: "This is the end of the teaching component.",
          },
          {
            type: "text",
            content: "Let's review the material.",
          },
        ],
      },
      {
        id: "35",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/3.png"),
          },
        ],
      },
      {
        id: "36",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/4.png"),
          },
          {
            type: "text",
            content:
              "Children with a recent upper respiratory tract infection (within the previous two weeks) are at greater risk for bronchospasm, laryngospasm, and desaturation.\n\nThis is particularly the case in children with reactive airways disease (asthma).\n\nThe decision to postpone surgery is made on a case-by-case basis.",
          },
        ],
      },
      {
        id: "37",
        content: [
          {
            type: "header",
            content: "Pre-operative Fasting Guidelines",
          },
          {
            type: "text",
            content:
              "Pre-operative fasting is ensured to reduce the risk of aspiration. This has to be balanced against the risks of dehydration and hypoglycemia.\n\nPlease fill in the boxes with the corresponding recommended fasting time (in hours) for each food / liquid type:\n\n\nClear Fluids\nBreast Milk\nSolids and non-clear fluids",
          },
        ],
      },
      {
        id: "38",
        content: [
          {
            type: "header",
            content: "Recommended Fasting Lengths",
          },
          {
            type: "text",
            content:
              "The recommended fasting lengths, based on the latest (2018) consensus statement, are as follows:\n- Clear fluids = 1 hour\n- Breast milk = 4 hours\n- Solids and non-clear fluids (including milk or formula) = 6 hours",
          },
        ],
      },
      {
        id: "39",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/5.png"),
          },
        ],
      },
      {
        id: "40",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/6.png"),
          },
          {
            type: "text",
            content:
              "To briefly review:\n- A shoulder roll may help align structures for laryngoscopy as the infant head is relatively large and predisposed to neck flexion.\n- The infant epiglottis is long, narrow, and difficult to lift indirectly using a curved laryngoscopy blade positioned in the vallecula.\n- The infant larynx is more cephalad than it is in adults. In infants, it is level with the C3-C4 vertebrae rather than C4-5.\n- The infant vocal cords are angled anteriorly (versus perpendicular to the trachea in adults).",
          },
        ],
      },
      {
        id: "41",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/7.png"),
          },
        ],
      },
      {
        id: "42",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/8.png"),
          },
          {
            type: "text",
            content:
              "Remember: The narrowest part of the pediatric airway is the cricoid cartilage. This is in contrast to adults where the narrowest part is the vocal cord.\n\nBecause of this, an endotracheal tube that easily passes through the vocal cords may still compromise capillary perfusion at the cricoid. This may result in edema and stridor after extubation.",
          },
        ],
      },
      {
        id: "43",
        content: [
          {
            type: "header",
            content: "Pediatric Fluid Maintenance Calculation",
          },
          {
            type: "text",
            content:
              "What would the maintenance fluid rate be for a 35 kg child? (mL/h)",
          },
        ],
      },
      {
        id: "44",
        content: [
          {
            type: "header",
            content: "Fluid Calculation Answer",
          },
          {
            type: "text",
            content:
              "For a 35 kg child, the maintenance fluid rate would be 75 mL/h.\n35 kg = 10 kg + 10 kg + 15 kg\n(4 mL/kg/h x 10 kg = 40 mL/h) + (2 mL/kg/h x 10 kg = 20 mL/h) + (1 mL/kg/h x 15 kg = 15 mL/h) = 40 mL/h + 20 mL/h + 15 mL/h = 75 mL/h\n\nA quick shortcut, if the child weighs more than 20 kg, is to add 40 mL/h to the child's weight to find maintenance rate.\nFor the 35 kg child above: 35 + 40 = 75 mL/h",
          },
        ],
      },
      {
        id: "45",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/9.png"),
          },
        ],
      },
      {
        id: "46",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/10.png"),
          },
          {
            type: "text",
            content:
              "The correct answer is decreased breath sounds on the left side, most likely due to right mainstem endobronchial intubation.\n\nAlthough the length of the trachea is 15 cm by late adolescents, it is only 5 cm in a term neonate and even shorter in premature neonates.\n\nThe right mainstem bronchus is larger than the left and is less acutely angled. This, along with the orientation of the bevel at the tip of a standard endotracheal tube, favours right-sided endobronchial intubation.\n\nEndobronchial intubation results in atelectasis of the opposite lung with right-to-left shunting and hypoxemia.",
          },
        ],
      },
      {
        id: "47",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/11.png"),
          },
        ],
      },
      {
        id: "48",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/12.png"),
          },
          {
            type: "text",
            content:
              "If you remember, FRC is defined as the equilibrium point of the respiratory system - where the natural tendency of the lungs to collapse is balanced by the natural tendency of the rib cage to expand. In normal healthy adults this is a passive equilibrium.\n\nInfants and young children have a compliant chest wall (the cartilaginous rib cage ossifies over time to support upright posture).  FRC is maintained close to that of an adult (per kg) through laryngeal braking and intercostal muscle tone to stabilize the cartilaginous chest wall.\n\nElastic lung tissue is still developing in children up to 10 years old; therefore, their small airways and alveoli are prone to collapse.  With loss of consciousness, laryngeal braking and intercostal muscle tone are lost.  This results in small airway closure, atelectasis, right-to-left shunting, and rapid desaturation.\n\nFurthermore, children have high oxygen consumption rates (VO2, 6 to 10 mL/kg/min in children vs. 3.5 mL/kg/min) and this further predisposes them to rapid desaturation.",
          },
        ],
      },
      {
        id: "49",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/13.png"),
          },
        ],
      },
      {
        id: "50",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/14.png"),
          },
          {
            type: "text",
            content:
              "Cardiac output (CO) in infants is rate-dependent.\n\nThis is because ventricular compliance is relatively low and stroke volume (SV) is fixed. By the formula CO = HR x SV, the only way for infants to increase cardiac output is through increases in heart rate.",
          },
        ],
      },
      {
        id: "51",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/15.png"),
          },
        ],
      },
      {
        id: "52",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/16.png"),
          },
          {
            type: "text",
            content:
              "The correct answer is that children have a high total body water (TBW)\n\nLower albumin levels result in less protein binding and higher plasma levels of unbound and available drug.\n\nHigher total body water (TBW) means a large volume of distribution in which drugs can redistribute, often necessitating higher initial loading doses.\n\nImmature hepatic and renal function may result in prolonged effect due to slower metabolism or elimination. This can be rather unpredictable.",
          },
        ],
      },
      {
        id: "53",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/17.png"),
          },
        ],
      },
      {
        id: "54",
        content: [
          {
            type: "image",
            content: require("@/assets/images/modules/9/18.png"),
          },
          {
            type: "text",
            content:
              "The best answer is atropine.\n\nThe bradycardia is a vagal response to laryngoscopy. This is a parasympathetic reflex and mediated by increased acetylcholine release and action on the muscarinic acetylcholine receptors in the sino-atrial node of the heart.\n\nAtropine is an anticholinergic medication and competitively inhibits binding of acetylcholine at muscarinic acetylcholine receptors. It would quickly and effectively reverse the bradycardia.\n\nEpinephrine is a potent alpha- and beta-adrenergic agonist and is used in cardiac arrests and profound shock / hypotension. It would effectively increase the patient's heart rate but, given that this is a vagal-mediated reflex, it would be unnecessary and would likely result in hypertension.\n\nPhenylephrine and norepinephrine predominantly act by increasing systemic vascular resistance and would not be appropriate to reverse bradycardia.",
          },
        ],
      },
      {
        id: "55",
        content: [
          {
            type: "text",
            content:
              "Congrats on finishing this module!  We hope you learned something today!\n\nPlease check out our other anesthesia modules.",
          },
        ],
      },
    ],
  },

  // add more modules here
];
