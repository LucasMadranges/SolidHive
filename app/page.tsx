"use client";
import Button from "@/components/ui/button";
import {Heart, Users, Calendar} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import logoPrimary from "@/public/logos/logo.svg";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <header>
                <div className="container flex h-32 items-center justify-between px-4 md:px-6 mx-auto">
                    <Link href="#"
                          className="flex items-center gap-2">
                        <Image
                            src={logoPrimary}
                            alt="SolidHive Logo"
                            width={316}
                            height={316}
                            className="rounded-lg"
                        />
                    </Link>
                    <nav className="flex gap-4">
                        <Button className="gap-2 px-4 py-2 bg-primary-purple rounded-md text-white transition border border-transparent hover:bg-white hover:text-primary-purple hover:border hover:border-primary-purple active:scale-95 hover:scale-105">
                            <Link href="#">Se connecter</Link>
                        </Button>
                        <Button className="gap-2 px-4 py-2 rounded-md transition hover:bg-gray-100  border border-primary-purple text-primary-purple active:scale-95 hover:scale-105">
                            <Link href="#">S&#39;inscrire</Link>
                        </Button>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-12">
                    <div className="container flex flex-col items-center gap-4 ps-4 text-center md:ps-6 lg:flex-row lg:gap-10 lg:text-left mx-auto">
                        <div className="space-y-4 lg:space-y-6 w-7/12">
                            <div className="space-y-2">
                                <h1 className="font-black tracking-tighter text-6xl text-primary-purple">
                                    La <span className="text-primary-cyan">Ruche</span> Qui Fait Bourdonner la <span className="text-primary-cyan">Solidarité</span> !
                                </h1>
                                <p className="max-w-[700px] text-lg text-black">
                                    Connectez-vous avec des associations, participez à des événements et contribuez à
                                    des cagnottes pour soutenir des causes qui vous tiennent à cœur
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                                <Button className="gap-2 px-4 py-2 bg-primary-purple rounded-md text-white transition border border-transparent hover:bg-white hover:text-primary-purple hover:border hover:border-primary-purple active:scale-95 hover:scale-105">
                                    Trouver une Association
                                </Button>
                            </div>
                        </div>
                        <div className="w-5/12 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 left-5 z-20">
                                <svg width="592"
                                     height="592"
                                     viewBox="0 0 576 516"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <clipPath id="shape">
                                        <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                              fill="none"/>
                                    </clipPath>
                                    <image width={800}
                                           height={535}
                                           clipPath="url(#shape)"
                                           xlinkHref="img/mockup-telephone.jpg"></image>
                                </svg>
                            </div>
                            <div className="z-10">
                                <svg width="632"
                                     height="632"
                                     viewBox="0 0 576 516"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                          fill="#510d6d"/>
                                </svg>
                            </div>
                            <div className="absolute left-24 bottom-0 z-30">
                                <svg width="128"
                                     height="128"
                                     viewBox="0 0 576 516"
                                     className="animate-spin-slow"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                          fill="#f26639"/>
                                </svg>
                            </div>
                            <div className="absolute -right-2 -top-2 z-30">
                                <svg width="128"
                                     height="128"
                                     className="animate-spin-slow"
                                     viewBox="0 0 576 516"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                          fill="#0497af"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-cyan">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-5xl">Comment
                                    ça
                                    marche ?</h2>
                                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                                    Découvrez comment SolidHive facilite la connexion entre associations et donateurs.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-yellow">
                                    <Users className="h-8 w-8 text-primary-cyan"/>
                                </div>
                                <h3 className="text-xl font-bold text-secondary-yellow">Trouvez des Associations</h3>
                                <p className="text-center text-white">
                                    Découvrez des associations locales et leurs projets qui correspondent à vos valeurs.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-yellow">
                                    <Calendar className="h-8 w-8 text-primary-cyan"/>
                                </div>
                                <h3 className="text-xl font-bold text-secondary-yellow">Participez aux Événements</h3>
                                <p className="text-center text-white">
                                    Engagez-vous dans des événements solidaires et rencontrez une communauté engagée.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-yellow">
                                    <Heart className="h-8 w-8 text-primary-cyan"/>
                                </div>
                                <h3 className="text-xl font-bold text-secondary-yellow">Soutenez des Causes</h3>
                                <p className="text-center text-white">
                                    Contribuez aux cagnottes et suivez l&#39;impact de vos dons en toute transparence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container flex flex-col items-center justify-center gap-4 px-4 py-32 text-center md:px-6 lg:flex-row lg:gap-10 lg:text-left mx-auto relative">
                        <div className="space-y-4 lg:space-y-6 w-full flex flex-col justify-center items-center">
                            <div className="space-y-2 flex flex-col justify-center items-center">
                                <h2 className="font-black tracking-tighter text-6xl text-center text-primary-purple">
                                    S&#39;inscrire à la newsletter
                                </h2>
                                <p className="text-center text-lg text-black">
                                    Pour suvire toute l&#39;actualité de SolidHive !
                                </p>
                            </div>
                            <div className="min-w-[750px] border border-primary-purple gap-4 rounded-xl px-12 py-8 flex flex-col items-start shadow-2xl">
                                <label className="text-center text-lg text-black">
                                    Votre email
                                </label>
                                <input placeholder="Votre email"
                                       className="border border-gray-300 px-4 py-2 rounded-lg w-full"/>
                                <Button className="gap-2 px-4 py-2 bg-primary-purple rounded-md text-white transition border border-transparent hover:bg-white hover:text-primary-purple hover:border hover:border-primary-purple active:scale-95 hover:scale-105">
                                    <Link href="#">S&#39;inscrire</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="absolute -left-16 bottom-32 -rotate-12 z-30">
                            <svg width="128"
                                 className="animate-spin-slow"
                                 height="128"
                                 viewBox="0 0 576 516"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                      fill="#f26639"/>
                            </svg>
                        </div>
                        <div className="absolute right-12 top-16 rotate-12 z-30">
                            <svg width="128"
                                 className="animate-spin-slow"
                                 height="128"
                                 viewBox="0 0 576 516"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                      fill="#510d6d"/>
                            </svg>
                        </div>
                        <div className="absolute -right-16 bottom-8 rotate-90 z-30 ">
                            <svg width="128"
                                 className="animate-spin-slow"
                                 height="128"
                                 viewBox="0 0 576 516"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.89786 289C-2.17738 269.817 -2.17737 246.183 8.89786 227L121.602 31.7905C132.677 12.6076 153.145 0.790466 175.296 0.790466H400.704C422.855 0.790466 443.323 12.6076 454.398 31.7905L567.102 227C578.177 246.183 578.177 269.817 567.102 289L454.398 484.21C443.323 503.392 422.855 515.21 400.704 515.21H175.296C153.145 515.21 132.677 503.392 121.602 484.21L8.89786 289Z"
                                      fill="#0497af"/>
                            </svg>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t">
                <div className="container flex flex-col gap-4 py-10 px-4 md:px-6 mx-auto">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <Link href="#"
                                  className="flex items-center gap-2">
                                <Image
                                    src={logoPrimary}
                                    alt="SolidHive Logo"
                                    width={316}
                                    height={316}
                                    className="rounded-lg"
                                />
                            </Link>
                        </div>
                        <nav className="flex gap-4 text-sm">
                            <Link href="#"
                                  className="text-primary-purple hover:underline ">
                                À propos
                            </Link>
                            <Link href="#"
                                  className="text-primary-purple hover:underline">
                                Contact
                            </Link>
                            <Link href="#"
                                  className="text-primary-purple hover:underline">
                                Mentions légales
                            </Link>
                        </nav>
                    </div>
                    <div className="text-center text-sm text-primary-purple">
                        © {new Date().getFullYear()} SolidHive. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}


/*
 <Image
     src={imgPolygon}
     alt="Illustration de la communauté"
     width={550}
     height={550}
     className="absolute -right-16"
 />
 */