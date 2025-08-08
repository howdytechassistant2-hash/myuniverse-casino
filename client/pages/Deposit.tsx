import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, DollarSign, Smartphone, Copy, CheckCircle } from "lucide-react";

const gameOptions = [
  "VBLink", "Ultra Panda", "Juwa", "Fire Kirin", 
  "Orion Stars", "Milky Ways", "Panda Master", "GAME VAULT"
];

export default function Deposit() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState("");
  const [amount, setAmount] = useState("");
  const [cashappTag, setCashappTag] = useState("$myuniversecasino");
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  const handleCopyTag = () => {
    navigator.clipboard.writeText(cashappTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitDeposit = async () => {
    if (!selectedGame || !amount) return;
    
    setSubmitting(true);
    try {
      const response = await fetch('/api/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.id,
          username: user?.username,
          game: selectedGame,
          amount: parseFloat(amount),
          cashappTag,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        alert(`Deposit request submitted for ${selectedGame} - $${amount}. Please send payment to ${cashappTag}`);
        setSelectedGame("");
        setAmount("");
      }
    } catch (error) {
      console.error('Deposit error:', error);
      alert('Failed to submit deposit request');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-dark via-slate-900 to-casino-dark">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-casino-gold to-yellow-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-casino-dark" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">MYUNIVERSE</h1>
            <h2 className="text-xl md:text-2xl font-bold text-white">CASINO</h2>
          </div>
        </Link>
        <div className="text-white">
          Welcome, <span className="text-casino-green font-bold">{user?.username}</span>
        </div>
      </header>

      <div className="px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Make a Deposit
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Deposit Form */}
            <Card className="bg-casino-card/95 border-casino-green/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-casino-green" />
                  <span>Deposit Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="game" className="text-white">Select Game</Label>
                  <Select value={selectedGame} onValueChange={setSelectedGame}>
                    <SelectTrigger className="bg-casino-dark/50 border-casino-green/20 text-white">
                      <SelectValue placeholder="Choose a game" />
                    </SelectTrigger>
                    <SelectContent className="bg-casino-dark border-casino-green/20">
                      {gameOptions.map((game) => (
                        <SelectItem key={game} value={game} className="text-white hover:bg-casino-green/20">
                          {game}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="10"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-casino-dark/50 border-casino-green/20 text-white placeholder:text-gray-400"
                    placeholder="Enter deposit amount"
                  />
                  <p className="text-sm text-gray-400">Minimum deposit: $10</p>
                </div>

                <Button
                  onClick={handleSubmitDeposit}
                  disabled={!selectedGame || !amount || parseFloat(amount) < 10 || submitting}
                  className="w-full bg-gradient-to-r from-casino-green to-green-400 hover:from-green-400 hover:to-casino-green text-casino-dark font-bold py-3 text-lg rounded-full shadow-lg shadow-casino-green/50 hover:shadow-casino-green/80 transition-all duration-300"
                >
                  {submitting ? "Submitting..." : "Submit Deposit Request"}
                </Button>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            <Card className="bg-casino-card/95 border-casino-green/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Smartphone className="w-6 h-6 text-casino-green" />
                  <span>CashApp Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-4">Send payment to our CashApp:</p>
                  
                  <div className="bg-casino-dark/50 border border-casino-green/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-casino-green text-xl font-bold">{cashappTag}</span>
                      <Button
                        onClick={handleCopyTag}
                        variant="outline"
                        size="sm"
                        className="border-casino-green/20 text-casino-green hover:bg-casino-green/20"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="bg-white p-6 rounded-lg mx-auto w-48 h-48 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-casino-dark mx-auto mb-2" />
                      <p className="text-casino-dark text-sm">CashApp QR Code</p>
                      <p className="text-casino-dark text-xs">{cashappTag}</p>
                    </div>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-4">
                    <h3 className="text-yellow-400 font-bold mb-2">Important Instructions:</h3>
                    <ul className="text-gray-300 text-sm space-y-1 text-left">
                      <li>• Include your username: <span className="text-casino-green font-bold">{user?.username}</span></li>
                      <li>• Include the game name in the payment note</li>
                      <li>• Processing takes 5-15 minutes</li>
                      <li>• Screenshots are not required but helpful</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
