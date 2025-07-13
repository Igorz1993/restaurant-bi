"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  BarChart3,
  Users2,
  Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-muted/40 text-muted-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 flex-col gap-2 border-r bg-background p-4">
        <Link
          href="/dashboard"
          className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground"
        >
          <LayoutDashboard className="h-6 w-6" /> Restaurant BI
        </Link>
        <NavItem icon={LayoutDashboard} href="/dashboard" label="Дашборд" />
        <NavItem icon={BarChart3} href="/sales" label="Продажи" />
        <NavItem icon={Users2} href="/hr" label="Персонал" />
        <NavItem icon={Settings} href="/settings" label="Настройки" />
      </aside>

      {/* Main area */}
      <main className="flex w-full flex-col gap-6 p-6 md:p-10">
        {/* Header */}
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-foreground">Главная</h1>
          <p className="text-sm">Быстрый обзор ключевых показателей вашего ресторана</p>
        </header>

        {/* KPI cards */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Выручка сегодня", value: "—", suffix: "₽" },
            { title: "Средний чек", value: "—", suffix: "₽" },
            { title: "Кол-во гостей", value: "—", suffix: "" },
            { title: "ФОТ / Выручка", value: "—", suffix: "%" }
          ].map((kpi) => (
            <Card key={kpi.title} className="shadow-sm">
              <CardContent className="p-4 text-sm">
                <p className="mb-2 text-muted-foreground">{kpi.title}</p>
                <p className="text-2xl font-semibold text-foreground">
                  {kpi.value}
                  <span className="ml-1 text-base font-normal">{kpi.suffix}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Layout placeholders */}
        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="h-64 shadow-sm">
            <CardContent className="flex h-full items-center justify-center">
              <span className="text-muted-foreground">График выручки (скоро)</span>
            </CardContent>
          </Card>
          <Card className="h-64 shadow-sm">
            <CardContent className="flex h-full items-center justify-center">
              <span className="text-muted-foreground">График среднего чека (скоро)</span>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

function NavItem({ icon: Icon, href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <Icon className="h-4 w-4" /> {label}
    </Link>
  );
}