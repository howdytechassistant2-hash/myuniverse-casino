import {
  Sparkles,
  Send,
  DollarSign,
  CreditCard,
  HeadphonesIcon,
  Zap,
  Shield,
  Gift,
  Star,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const gameProviders = [
  {
    name: "VBLink",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fffae681dbcd7461980d77d5e3a05910d%2Ff122436734a44c019543e59662ae84e4",
    bgColor: "from-purple-600 to-purple-800",
    url: "https://www.vblink777.club/",
  },
  {
    name: "Ultra Panda",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fffae681dbcd7461980d77d5e3a05910d%2F982576dc41b547c8bdffdbd3014d1750",
    bgColor: "from-red-600 to-red-800",
    url: "https://www.ultrapanda.mobi/",
  },
  {
    name: "Juwa",
    image:
      "https://play-lh.googleusercontent.com/iVYgmsm9piJ1vxRoaY_fEFYB_cG2DuaKA7NQq54-_u1f5M4dDCFU6YHJ6hTY28ZKtRg=w240-h480-rw",
    bgColor: "from-yellow-600 to-orange-600",
    url: "https://dl.juwa777.com/",
  },
  {
    name: "Fire Kirin",
    image:
      "https://lh3.googleusercontent.com/8jDkXoDAnLFL2TUNAw8k3yZ0n8IMH9iVe4N0bTpi1e307T1bD4aOne3njqlfSIx2vHc",
    bgColor: "from-orange-500 to-yellow-500",
    url: "http://start.firekirin.xyz:8580/",
  },
  {
    name: "Orion Stars",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa6WX9nQjt3VUZAKnENvhr3EHpw_8KkFv8w&s",
    bgColor: "from-purple-500 to-pink-500",
    url: "http://start.orionstars.vip:8580/index.html",
  },
  {
    name: "Milky Ways",
    image:
      "https://casinohipster.com/wp-content/uploads/2022/05/slots-milky-ways-nolimit-city-play-logo.jpg",
    bgColor: "from-blue-500 to-purple-500",
    url: "https://milkywayapp.xyz/",
  },
  {
    name: "Panda Master",
    image:
      "https://ballislife.com/betting/wp-content/uploads/sites/20/2023/08/Panda-Master-768x432.png.webp",
    bgColor: "from-red-700 to-red-900",
    url: "http://mobile.pandamaster.vip/web_game/pandamaster/",
  },
  {
    name: "GAME VAULT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVZCP_zefwDunNZOHtgVvE3JduxqFt7c7Zw&s",
    bgColor: "from-blue-600 to-blue-800",
    url: "https://product.gamevault7777.com/web/",
  },
];

const features = [
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: "VERSATILE PAYMENT SYSTEM",
    description: "We accept payment from various cards/apps",
    bgColor: "from-pink-400 to-pink-600",
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12" />,
    title: "24/7 SERVICE",
    description: "We provide 24/7 customer service",
    bgColor: "from-pink-400 to-pink-600",
  },
  {
    icon: <Gift className="w-12 h-12" />,
    title: "DAILY REWARDS",
    description: "Log in daily and claim exclusive bonuses",
    bgColor: "from-green-400 to-green-600",
  },
];

export default function Index() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-dark via-slate-900 to-casino-dark">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-casino-gold to-yellow-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-casino-dark" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              MYUNIVERSE
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white">CASINO</h2>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">
                Welcome,{" "}
                <span className="text-casino-green font-bold">
                  {user?.username}
                </span>
              </span>
              <Button
                onClick={logout}
                variant="outline"
                className="border-casino-green/20 text-casino-green hover:bg-casino-green/20"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-6 py-2 rounded-full">
                Sign In
              </Button>
            </Link>
          )}
          <div className="flex items-center space-x-2">
            <Send className="w-5 h-5 text-casino-green" />
            <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-6 py-2 rounded-full">
              LIVE CHAT
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-8">
        <Card className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 border-casino-green/20 relative overflow-hidden shadow-2xl shadow-casino-green/20">
          {/* Background Image - More Visible */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fffae681dbcd7461980d77d5e3a05910d%2Fbadb060c20524a63ac8a53152c708683?format=webp&width=800')`,
            }}
          ></div>

          {/* Lighter overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/50 to-indigo-900/40"></div>

          <CardContent className="p-8 md:p-12 text-center relative z-20">
            <div className="mb-4">
              <span className="bg-casino-green text-casino-dark px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-xl shadow-casino-green/60 animate-pulse hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                ✨ New Player Offer ✨
              </span>
            </div>

            {/* Glowing 100% with enhanced visibility */}
            <div className="relative mb-4">
              <h3 className="text-6xl md:text-8xl font-bold text-white mb-4 relative">
                <span
                  className="bg-gradient-to-r from-casino-gold via-yellow-300 to-casino-gold bg-clip-text text-transparent animate-pulse drop-shadow-2xl"
                  style={{
                    textShadow:
                      "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)",
                  }}
                >
                  100%
                </span>
                <div className="absolute inset-0 blur-xl bg-gradient-to-r from-casino-gold/70 to-yellow-300/70 animate-pulse -z-10"></div>
              </h3>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold mb-8 relative">
              <span
                className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
                }}
              >
                SIGNUP BONUS
              </span>
            </h4>

            {/* Enhanced Slot Machine Graphic */}
            <div className="flex justify-center items-center mb-8 space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center animate-spin shadow-lg shadow-yellow-500/50">
                <Star className="w-8 h-8 text-yellow-900 animate-pulse" />
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300 border border-casino-green/30">
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded flex items-center justify-center text-white font-bold animate-bounce shadow-lg">
                    🍒
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center text-white font-bold animate-bounce delay-150 shadow-lg">
                    BAR
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white font-bold animate-bounce delay-300 shadow-lg">
                    🍒
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-casino-gold to-yellow-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-casino-gold/50">
                <DollarSign className="w-8 h-8 text-casino-dark animate-bounce" />
              </div>
            </div>

            {/* Enhanced Signup Button */}
            <div className="relative">
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-casino-green to-green-400 hover:from-green-400 hover:to-casino-green text-casino-dark font-bold px-16 py-6 text-xl rounded-full uppercase tracking-wide shadow-2xl shadow-casino-green/70 hover:shadow-casino-green/90 hover:scale-110 transition-all duration-300 border-4 border-white/40 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>Signup Now</span>
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </span>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              {/* Enhanced button glow ring */}
              <div className="absolute inset-0 rounded-full bg-casino-green/40 blur-2xl animate-pulse -z-10"></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Our Platforms Section */}
      <section className="px-4 md:px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
          Our Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameProviders.map((provider, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${provider.bgColor} border-none relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-20 h-20 mx-auto rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {provider.name}
                </h3>
                <a
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-8 py-2 rounded-full uppercase tracking-wide w-full">
                    Play
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deposit/Withdraw Buttons */}
      <section className="px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          {isAuthenticated ? (
            <>
              <Link to="/deposit" className="flex-1">
                <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-12 py-6 text-xl rounded-full uppercase tracking-wide w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <span>Deposit</span>
                  </div>
                </Button>
              </Link>
              <Link to="/withdraw" className="flex-1">
                <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-12 py-6 text-xl rounded-full uppercase tracking-wide w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <span>Withdraw</span>
                  </div>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth" className="flex-1">
                <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-12 py-6 text-xl rounded-full uppercase tracking-wide w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <span>Sign In to Deposit</span>
                  </div>
                </Button>
              </Link>
              <Link to="/auth" className="flex-1">
                <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-12 py-6 text-xl rounded-full uppercase tracking-wide w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                    <span>Sign In to Withdraw</span>
                  </div>
                </Button>
              </Link>
            </>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 md:px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 uppercase tracking-wide">
          About Us
        </h2>
        <Card className="bg-casino-card/50 border-casino-green/20 max-w-4xl mx-auto relative">
          <CardContent className="p-8 md:p-12">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              MyUniverse Casino is your trusted platform for fast, secure, and
              automated casino slots recharge and redemption services.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-casino-green mt-1 flex-shrink-0" />
                <span>Automated INSTANT deposits</span>
              </li>
              <li className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-casino-green mt-1 flex-shrink-0" />
                <span>
                  Exclusive payment system solely dedicated to our website and
                  patrons
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-casino-green mt-1 flex-shrink-0" />
                <span>Quick withdrawals, and a user-friendly interface</span>
              </li>
              <li className="flex items-start space-x-3">
                <HeadphonesIcon className="w-5 h-5 text-casino-green mt-1 flex-shrink-0" />
                <span>Backed by advanced security and 24/7 support</span>
              </li>
            </ul>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
              <div className="w-full h-full bg-casino-gold rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-casino-card/50 border-casino-green/20 text-center"
            >
              <CardContent className="p-8">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-casino-gold mb-4 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Referral Bonus Section */}
      <section className="px-4 md:px-6 py-12">
        <Card className="bg-gradient-to-br from-purple-900 to-indigo-900 border-casino-green/20 max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-casino-gold mb-2">
              75%
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-casino-purple mb-6 uppercase tracking-wide">
              Referral Bonus
            </h3>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Refer our platform to your friends and receive 75% of what they
              deposit as your REFERRAL BONUS
            </p>
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-8">
              <Gift className="w-16 h-16 text-white" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-6 py-12 border-t border-casino-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-casino-gold to-yellow-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-casino-dark" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">MYUNIVERSE</h1>
                  <h2 className="text-xl font-bold text-white">CASINO</h2>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-casino-gold mb-4 uppercase">
                Play Like Never Before
              </h3>
              <p className="text-casino-green font-bold text-lg mb-4">
                GAME ON!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">
                  Telegram
                </h4>
                <p className="text-casino-green">@thesolarclub</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">
                  Email
                </h4>
                <p className="text-casino-green">Automatic@thesolar.solar</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">
                  Social
                </h4>
                <div className="flex space-x-4">
                  <Send className="w-6 h-6 text-casino-green" />
                  <div className="w-6 h-6 bg-casino-green rounded-full"></div>
                </div>
              </div>
              <Button className="bg-casino-green hover:bg-casino-green/90 text-casino-dark font-bold px-8 py-3 rounded-full uppercase tracking-wide">
                Live Chat
              </Button>
            </div>
          </div>

          <div className="text-center text-gray-400 pt-8 border-t border-casino-green/10">
            <p>© 2024 MyUniverse Casino. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
