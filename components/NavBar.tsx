import { AlignLeft, UserRound } from 'lucide-react'
import { LogOut } from 'lucide-react';
import Container from "./Container";
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="bg-zinc-600">
      <Container>
        <nav className="h-14 w-full flex items-center justify-between">
          <div className="drawer w-11">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer"
                className="text-white font-bold cursor-pointer"
              >
                <AlignLeft className="w-8 h-8 text-white hover:opacity-75 transition duration-200"/>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <aside className="menu p-4 w-80 min-h-full border-r border-zinc-400 bg-base-200 text-base-content flex flex-col">
                <div className="flex-grow flex flex-col mt-8">
                    <p className='flex gap-x-2 items-center text-lg font-medium'><UserRound className='w-5 h-5' /> <span className=''>João Leandro</span></p>
                </div>

                <Link href={"/"} className="btn btn-square w-[30%] border border-white hover:btn-error flex">
                    <LogOut className='w-5 h-5 text-white'/>
                </Link>
              </aside>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
