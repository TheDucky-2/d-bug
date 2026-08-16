import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Crown, Zap, Flame } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { SubscriptionPlan } from "@/types/subscription";

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const pricingData: Array<SubscriptionPlan> = [
        { 
            name: 'Free', 
            price: 0,
            mostPopular: false,
            description: 'For individuals and small teams.',
            features: [
                '1 project', 'Up to 3 members', 'Unlimited bugs', 'Bug reports & details', 'Severity & priority', 
                'Labels & tags', 'Bug assignment', 'Comments & mentions', 'Activity history', 'Basic search & filters', 'Basic notifications'
            ]
        },
        {
            name: 'Pro',
            mostPopular: true,
            price: isAnnual ? 299 : 29,
            description: 'For teams managing bugs across multiple projects.',
            features: [
                'Unlimited projects',
                'Unlimited members',
                
                'Advanced triage',
                'Custom workflows',
                'Advanced search & filters',
                'File attachments',
                'Rich bug context',
                'Team activity feed',
                'Advanced notifications',
                'RBAC & custom permissions',
                'Audit logs',
                'Priority support',
                'Analytics & insights',
                ]
        },

    ]

    return (
        <>
        <div>
          <Navbar/>
        </div>

          <section className='flex items-center justify-center flex-col py-20 px-4'>
              <h1 className='font-medium text-4xl md:text-[52px] dark:text-teal-500 text-teal-700 text-center'>
                Simple pricing for better bug management.
              </h1>

              <p className='text-base/7 dark:text-zinc-400 text-zinc-500 max-w-3xl text-center mt-4'>
              Simple plans for teams that want a better way to understand, triage and collaborate on bugs.
              </p>
              
              <div className='mt-6 flex bg-zinc-100 p-1.5 rounded-full'>
                  <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${!isAnnual ?
                     'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Monthly</button>
                  <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition
                     ${isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Annually</button>
              </div>

              <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-between'>
                  {pricingData.map((item, index) => (
                      <div key={index} 
                      className={`border border-zinc-800/30 dark:border-zinc-200/30 rounded-2xl p-6 flex flex-col items-start max-w-xl transition 
                      duration-300 hover:-translate-y-1 
                      ${item.mostPopular ? 
                      'bg-zinc-900 dark:bg-white  ' 
                      :  'dark:bg-zinc-900 bg-white '}`}>

                        <div className="flex justify-between items-center w-full">
                          <h1 className=' flex items-center gap-2 font-medium text-3xl dark:text-teal-600 text-teal-600 mt-1'>
                            {item.name}
                            {item.name === "Basic" &&  <Zap className="text-yellow-600"/> }
                            {item.name === "Pro" &&  <Crown className="text-yellow-600"/> }
                          
                          </h1>

                          {item.mostPopular && (

                          <p className="dark:bg-purple-700 bg-purple-600 py-1 px-2 rounded-sm text-xs font-semibold text-white">
            
                            Most Popular
                        </p>
                        )
                          }
                        </div>

                          <p className='text-sm  text-zinc-400 mt-2'>{item.description}</p>
                          <h1 className='font-medium text-5xl dark:text-teal-600 text-teal-600 mt-6'>${item.price}</h1>

                          <Link to="/auth/sign-up" 
                          className={`justify-center flex w-full px-4 py-3 rounded-full font-semibold cursor-pointer text-slate-600 text-sm mt-8 
                            ${item.mostPopular
                              ? 'dark:bg-zinc-800 bg-slate-700  hover:bg-zinc-700 dark:hover:bg-slate-600 text-white'
                              : 
                             'bg-zinc-800 dark:bg-slate-700  hover:bg-zinc-700 dark:hover:bg-slate-600 text-white'}`}>
                              Get Started with {item.name}
                          </Link>
                        
                          <div className="my-4">
                          <p className="font-semibold text-lg text-teal-600">
                            {item.mostPopular ? "Everything in Free, plus:" : "Includes:"}
                          </p>
                          </div>

                          <div className='w-full  space-y-2.5 pb-4'>
                              {item.features.map((feature, index) => (
                                  <p key={index} className='flex items-center gap-3 text-sm text-zinc-400'>

                                      <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0'>
                                          <span className='size-1.5 rounded-full bg-zinc-800' />
                                      </span>
                                      {feature}
                                  </p>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>

              <div className="my-8  py-2 gap-4 flex flex-col min-w-5xl ">

                <p className="font-bold text-xl text-center dark:text-zinc-400 text-zinc-500  ">
                    Understand → Triage → Collaborate → Resolve
                </p>

                <h3 className="font-semibold text-3xl dark:text-teal-600 text-teal-600 text-center">
                    Built for the way teams actually fix bugs.
                </h3>
              </div>
              
          </section>

          <div >
            <Footer/>
          </div>
        </>
    )
}

export default Pricing