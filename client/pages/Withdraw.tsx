import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, DollarSign, Banknote, AlertCircle } from "lucide-react";

export default function Withdraw() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [cashtag, setCashtag] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmitWithdraw = async () => {
    if (!amount || !cashtag) return;
    
    setSubmitting(true);
    try {
      const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user?.id,
          username: user?.username,
          amount: parseFloat(amount),
          cashtag: cashtag.startsWith('$') ? cashtag : `$${cashtag}`,
          notes,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        alert(`Withdrawal request submitted for $${amount} to ${cashtag}. Processing time: 24-48 hours.`);
        setAmount("");
        setCashtag("");
        setNotes("");
      }
    } catch (error) {
      console.error('Withdraw error:', error);
      alert('Failed to submit withdrawal request');
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Request Withdrawal
          </h1>

          <Card className="bg-casino-card/95 border-casino-green/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Banknote className="w-6 h-6 text-casino-green" />
                <span>Withdrawal Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">Withdrawal Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  min="20"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-casino-dark/50 border-casino-green/20 text-white placeholder:text-gray-400"
                  placeholder="Enter withdrawal amount"
                />
                <p className="text-sm text-gray-400">Minimum withdrawal: $20</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cashtag" className="text-white">Your CashApp Tag</Label>
                <Input
                  id="cashtag"
                  type="text"
                  value={cashtag}
                  onChange={(e) => setCashtag(e.target.value)}
                  className="bg-casino-dark/50 border-casino-green/20 text-white placeholder:text-gray-400"
                  placeholder="$yourcashtag"
                />
                <p className="text-sm text-gray-400">Enter your CashApp cashtag (e.g., $johndoe)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-white">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="bg-casino-dark/50 border-casino-green/20 text-white placeholder:text-gray-400"
                  placeholder="Any additional information..."
                  rows={3}
                />
              </div>

              {/* Important Information */}
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                <h3 className="text-blue-400 font-bold mb-2 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5" />
                  <span>Withdrawal Information</span>
                </h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Processing time: 24-48 hours</li>
                  <li>• Minimum withdrawal: $20</li>
                  <li>• Maximum daily withdrawal: $5000</li>
                  <li>• Verify your CashApp tag is correct</li>
                  <li>• Contact support if you don't receive payment within 48 hours</li>
                </ul>
              </div>

              {/* Balance Display */}
              <div className="bg-casino-green/10 border border-casino-green/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Available Balance:</span>
                  <span className="text-casino-green text-xl font-bold">$0.00</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Contact admin to check your actual balance
                </p>
              </div>

              <Button
                onClick={handleSubmitWithdraw}
                disabled={!amount || !cashtag || parseFloat(amount) < 20 || submitting}
                className="w-full bg-gradient-to-r from-casino-green to-green-400 hover:from-green-400 hover:to-casino-green text-casino-dark font-bold py-3 text-lg rounded-full shadow-lg shadow-casino-green/50 hover:shadow-casino-green/80 transition-all duration-300"
              >
                {submitting ? "Submitting..." : "Submit Withdrawal Request"}
              </Button>

              <div className="text-center">
                <Link 
                  to="/"
                  className="text-casino-green hover:text-green-400 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
