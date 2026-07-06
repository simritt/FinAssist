import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function ValuationCalculatorPage() {
  const [inputs, setInputs] = useState({ eps: "", growthRate: "", peRatio: "" });
  const [result, setResult] = useState(null);

  const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const calculate = () => {
    const eps = parseFloat(inputs.eps) || 0;
    const growth = parseFloat(inputs.growthRate) || 0;
    const pe = parseFloat(inputs.peRatio) || 0;
    // Simplified Graham-style estimate for demonstration purposes
    const fairValue = eps * (8.5 + 2 * growth) * (pe > 0 ? pe / 15 : 1);
    setResult(fairValue.toFixed(2));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Valuation Calculator</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Estimate a stock's intrinsic value using fundamental inputs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-6">
            <Calculator size={18} className="text-primary-500" />
            <h3 className="font-bold text-slate-900 dark:text-white">Inputs</h3>
          </div>
          <div className="space-y-4">
            <Input
              label="Earnings Per Share (EPS)"
              name="eps"
              type="number"
              placeholder="e.g. 6.42"
              value={inputs.eps}
              onChange={handleChange}
            />
            <Input
              label="Expected Growth Rate (%)"
              name="growthRate"
              type="number"
              placeholder="e.g. 12"
              value={inputs.growthRate}
              onChange={handleChange}
            />
            <Input
              label="Industry Average P/E Ratio"
              name="peRatio"
              type="number"
              placeholder="e.g. 22"
              value={inputs.peRatio}
              onChange={handleChange}
            />
            <Button variant="primary" className="w-full" onClick={calculate}>
              Calculate Fair Value
            </Button>
          </div>
        </Card>

        <Card hover={false} className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-primary-500/5 dark:to-indigo-500/5">
          <TrendingUp size={32} className="text-primary-500 mb-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Estimated Fair Value</p>
          {result ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl font-extrabold text-primary-600 dark:text-primary-400"
            >
              ${result}
            </motion.p>
          ) : (
            <p className="text-4xl font-extrabold text-slate-300 dark:text-slate-600">$—.—</p>
          )}
          <p className="text-xs text-slate-400 mt-4 max-w-xs">
            Based on a simplified Graham-style formula. For educational purposes — not financial advice.
          </p>
        </Card>
      </div>
    </div>
  );
}
