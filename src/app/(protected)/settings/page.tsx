import AccountSection from '@/components/settings/AccountSection'
import AppearanceSection from '@/components/settings/AppearanceSection'
import EditorSettings from '@/components/settings/EditorSettings'
import { Separator } from '@/components/ui/separator'

const SettingPage = () => {
  return (
    <div className='flex flex-col items-center min-w-screen px-4 py-10 font-serif'>
      <div className='w-2xl'>
        <header>
          <h1 className='text-3xl '>Settings</h1>
          <p className=' text-gray-500 my-2 font-semibold'>Preferences are saved automatically</p>
        </header>
        <AccountSection />
        <Separator className='my-3'/>
        <AppearanceSection/>
        <Separator className='my-3'/>
        <EditorSettings/>
      </div>
    </div>
  )
}

export default SettingPage