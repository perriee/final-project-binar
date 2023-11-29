import React from 'react';

// Components
import { NavbarAkun } from '../assets/components/navbar/NavbarAkun';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { SidebarAkun } from '../assets/components/sidebar/SidebarAkun';
import { IoImageOutline } from 'react-icons/io5';

export const AkunProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarAkun />
      <div className="mt-[5rem] bg-secondary h-[10rem] px-80">
        <div className="flex items-center gap-2 py-8 text-lg font-bold text-primary">
          <GoArrowLeft
            size={30}
            className="cursor-pointer"
            onClick={() => {
              navigate('/');
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex flex-col items-center w-[60%] gap-4">
              <div className="w-20 h-20 border-[3px] rounded-full border-primary relative">
                <div className="absolute bottom-0 right-0 bg-white rounded-full text-primary w-fit">
                  <IoImageOutline size={25} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nama</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-80 rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Bingwa"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-80 rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="bingwa@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-80 rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="08123456789"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Negara</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-80 rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Indonesia"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Kota</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-80 rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Jakarta"
                />
              </div>
              <button className="px-4 py-3 font-semibold text-white w-80 bg-primary rounded-2xl hover:bg-primary-hover">
                Simpan Profil Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
