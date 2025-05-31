
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Vote, TrendingUp, Users } from 'lucide-react';

const VotingWidget = () => {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const poll = {
    question: "What type of content would you like to see more of?",
    options: [
      { id: 1, text: "Sci-Fi Series", votes: 1247, percentage: 35 },
      { id: 2, text: "Documentary Features", votes: 892, percentage: 25 },
      { id: 3, text: "Reality Competition", votes: 1068, percentage: 30 },
      { id: 4, text: "Historical Drama", votes: 356, percentage: 10 }
    ],
    totalVotes: 3563
  };

  const handleVote = (optionId: number) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
      setHasVoted(true);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Vote className="h-8 w-8 text-nobody-primary mr-3" />
                <CardTitle className="text-2xl font-cinematic text-white">
                  Community <span className="gradient-text">Voice</span>
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Help shape our future content by participating in our community polls
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {poll.question}
                </h3>
                
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                  <Users className="h-4 w-4 mr-2" />
                  {poll.totalVotes} total votes
                  <TrendingUp className="h-4 w-4 ml-4 mr-2" />
                  Live results
                </div>
              </div>

              <div className="space-y-4">
                {poll.options.map((option) => (
                  <div key={option.id} className="space-y-2">
                    <Button
                      variant={selectedOption === option.id ? "default" : "outline"}
                      className={`w-full justify-between p-4 h-auto ${
                        hasVoted
                          ? selectedOption === option.id
                            ? "bg-nobody-primary hover:bg-nobody-primary"
                            : "opacity-60"
                          : "hover:border-nobody-primary hover:text-nobody-primary"
                      }`}
                      onClick={() => handleVote(option.id)}
                      disabled={hasVoted}
                    >
                      <span>{option.text}</span>
                      {hasVoted && (
                        <span className="text-sm">
                          {option.votes} votes ({option.percentage}%)
                        </span>
                      )}
                    </Button>
                    
                    {hasVoted && (
                      <Progress
                        value={option.percentage}
                        className="h-2"
                        style={{
                          background: selectedOption === option.id ? 'rgb(255, 107, 53)' : undefined
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {hasVoted && (
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Thank you for voting! Results are updated in real-time.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VotingWidget;
