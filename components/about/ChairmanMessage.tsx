import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* Image */}

          <div className="w-full">

            <Image
              src="/Chairman.webp"
              alt="Founder's Note"
              width={500}
              height={500}
              sizes="(min-width: 768px) 50vw, 80vw"
              className="w-full h-auto rounded-2xl shadow-lg"
            />

          </div>

          {/* Message */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wide md:tracking-widest text-sm md:text-base">
              Founder's Note
            </p>

            <h2 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              విద్యా దదాతి వినయం వినయాద్ యాతి పాత్రతామ్
            </h2>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
              ఈ రోజు పోటీ ప్రపంచంలో, విద్యను వ్యాపారంగా మార్చేసారు, ప్రతి విద్యార్థికి నాణ్యమైన విద్య అని నమ్మిన నేను, 
              అందరికీ ప్రశాంతమైన వాతావరణంలో, ఉత్తమమైన విద్య, ఆరోగ్యమైన ఆహారం,
              ఉన్నతమైన ప్రమాణాలు కలిగిన ఉపాధ్యాయులతో శిక్షణ అందిస్తూ ప్రతి విద్యార్థిని వ్యక్తి నుంచి వ్యవస్థను తీర్చిదిద్దే పౌరుడిగా మార్చాలని సదుద్దేశంతో VR స్థాపించాను.
            </p>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
             మా VRకి రండి, మా అధ్యాపకులతో మాట్లాడండి, మా విద్యార్థులని కలవండి, మీ పిల్లల బంగారు భవిష్యత్తుపై నిర్ణయం మీరే తీసుకోండి. 
             VR మిమ్మల్ని ఆహ్వానించడానికి సిద్ధంగా ఉంది. మీ పిల్లల బంగారు భవిష్యత్తు ఈ రోజు సరైన నిర్ణయంతో ప్రారంభమవుతుంది.
            </p>

            <p className="mt-6 md:mt-8 font-bold text-blue-900 text-sm md:text-base">
              Founder/Chairman
            </p>

            <p className="text-orange-500 text-sm md:text-base">
              Jawan Ramesh
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}