import {
    Globe, BookOpen, GraduationCap, Handshake, Target, Lightbulb,
    Zap, Radio, Wifi, Cpu, Layers, Users, Calendar, MapPin,
    ArrowRight, Mail, Instagram, Linkedin, Home, Info,
    Award, Star, Heart, Shield, Terminal, Smartphone,
    Database, Cloud, Lock, Search, Menu, X, ChevronRight,
    LucideIcon
} from 'lucide-react';

export type IconName =
    | 'globe' | 'book' | 'graduation' | 'handshake' | 'target' | 'lightbulb'
    | 'zap' | 'radio' | 'wifi' | 'cpu' | 'layers' | 'users' | 'calendar'
    | 'map' | 'arrow' | 'mail' | 'instagram' | 'linkedin' | 'home' | 'info'
    | 'award' | 'star' | 'heart' | 'shield' | 'terminal' | 'smartphone'
    | 'database' | 'cloud' | 'lock' | 'search';

const iconMap: Record<string, LucideIcon> = {
    globe: Globe,
    book: BookOpen,
    graduation: GraduationCap,
    handshake: Handshake,
    target: Target,
    lightbulb: Lightbulb,
    zap: Zap,
    radio: Radio,
    wifi: Wifi,
    cpu: Cpu,
    layers: Layers,
    users: Users,
    calendar: Calendar,
    map: MapPin,
    arrow: ArrowRight,
    mail: Mail,
    instagram: Instagram,
    linkedin: Linkedin,
    home: Home,
    info: Info,
    award: Award,
    star: Star,
    heart: Heart,
    shield: Shield,
    terminal: Terminal,
    smartphone: Smartphone,
    database: Database,
    cloud: Cloud,
    lock: Lock,
    search: Search
};

interface DynamicIconProps {
    name: string;
    className?: string;
    size?: number;
}

export function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
    // Normalize string: lowercase and remove spaces/dashes if any
    const normalizedName = name.toLowerCase().replace(/[-\s]/g, '');

    // Find matching icon (try exact match first, then partial)
    const IconComponent = iconMap[normalizedName] ||
        Object.entries(iconMap).find(([key]) => normalizedName.includes(key))?.[1] ||
        Globe; // Default fallback

    return <IconComponent className={className} size={size} />;
}
