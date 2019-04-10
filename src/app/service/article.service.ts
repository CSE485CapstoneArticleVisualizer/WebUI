import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../shared/classes';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public article: Article;

  constructor(private http: HttpClient) {
    this.article = {
      title: 'Normative approach to market microstructure analysis',
      abstract: 'In this thesis we propose a normative approach to market microstructure analysis. We study, model, and quantify low-level high frequency interactions among agents in financial markets. This is an environment where electronic agents are much better positioned to both make decisions and take actions because of the amount of information and the rapid pace of activity, which overwhelm humans. Unlike previous work in this area, we are not only interested in explaining why microstructure variables (prices, volumes, spreads, order flow, etc) behave in a certain way, but also in determining optimal policies for agents interacting in this environment. Our prescriptive---as opposed to explanatory---method treats market interactions as a stochastic control problem. We suggest a quantitative framework for solving this problem, describe a reinforcement learning algorithm tailored to this domain, and conduct empirical studies on very large datasets of high frequency data. We hope that our research will lead not just to automation of market activities, but to more orderly and efficient financial markets.In this thesis we propose a normative approach to market microstructure analysis. We study, model, and quantify low-level high frequency interactions among agents in financial markets. This is an environment where electronic agents are much better positioned to both make decisions and take actions because of the amount of information and the rapid pace of activity, which overwhelm humans. Unlike previous work in this area, we are not only interested in explaining why microstructure variables (prices, volumes, spreads, order flow, etc) behave in a certain way, but also in determining optimal policies for agents interacting in this environment. Our prescriptive---as opposed to explanatory---method treats market interactions as a stochastic control problem. We suggest a quantitative framework for solving this problem, describe a reinforcement learning algorithm tailored to this domain, and conduct empirical studies on very large datasets of high frequency data. We hope that our research will lead not just to automation of market activities, but to more orderly and efficient financial markets.',
      authors: [
        'Yuriy Nevmyvaka'
      ],
      citations: [
        'Using real-time cluster configurations of streaming asynchronous features as online state descriptors in financial markets',
        'Intelligent trading agents for massively multi-player game economies',
        'The evolution and dynamics of stocks on the Johannesburg Securities Exchange and their implications for equity investment management'
      ],
      references: [
        'The Microeconomics of Market Making',
        'A Simple Implicit Measure of the Effective Bid\u2010Ask Spread in an Efficient Market',
        'Market vs. Limit Orders: The SuperDOT Evidence on Order Submission Strategy',
        'Adverse Selection and Competitive Market Making: Empirical Evidence from a Limit Order Market',
        '[book]Continuous-Time Finance',
        'Optimal Order Submission Strategies in Some Stylized Trading Problems',
        'EFFICIENT CAPITAL MARKETS: A REVIEW OF THEORY AND EMPIRICAL WORK*',
        '[book]Optimal Trading Strategies: Quantitative Approaches for Managing Market Impact and Trading Risk',
        '[book]A Non-Random Walk Down Wall Street',
        'Dealership market: Market-making with inventory\u2606',
        'An Empirical Analysis of the Limit Order Book and the Order Flow in the Paris Bourse',
        'Trading Mechanisms in Securities Markets',
        'Liquidity Beyond the Inside Spread: Measuring and Using Information in the Limit Order Book',
        'Liquidity Supply and Demand in Limit Order Markets',
        'Market Making, the Tick Size, and Payment-for-Order Flow: Theory and Evidence',
        '[book]On the feasibility of automated market making by a programmed specialist',
        'Technical Analysis and Liquidity Provision',
        'BID, ASK AND\' TRANSACTION PRICES IN A SPECIALIST MARKET WITH HETEROGENEOUSLY INFORMED TRADERS*',
        'Characterizing effective trading strategies: Insights from a computerized double auction tournament',
        'Strategic trading in a dynamic noisy market',
        'CAPITAL ASSET PRICES: A THEORY OF MARKET EQUILIBRIUM UNDER CONDITIONS OF RISK',
        'Price Dynamics in Limit Order Markets',
        'The Penn-Lehman automated trading project',
        'High frequency time series analysis and prediction using Markov models',
        'PRICE, TRADE SIZE, AND INFORMATION IN SECURITIES MARKETS*',
        'Order aggressiveness in limit order book markets',
        'Lifting the Veil: An Analysis of Pre-Trade Transparency at the NYSE',
        'Eighths, Sixteenths and Market Depth: Changes in Tick Size and Liquidity Provision on the Nyse',
        'On the Estimation of Bid-Ask Spreads: Theory and Evidence',
        'Optimal control of execution costs',
        'The Adjustment of Stock Prices to New Information',
        'Limit orders and the bid-ask spread',
        'Market Microstructure and Stock Return Predictions',
        'Optimal execution of portfolio transactions',
        'Liquidity-Based Competition for Order Flow',
        'The 2001 Trading Agent Competition',
        'Volatility in US and European Equity Markets: An Assessment of Market Quality',
        'Price Competition Between Market Makers',
        'The costs and determinants of order aggressiveness',
        '[book]A trading desk\'s view of market quality',
        'Market Microstructure: A Practitioner\'s Guide',
        'Inflation, Rational Valuation and the Market',
        'Order Submission Strategy and the Curious Case of Marketable Limit Orders',
        'An Analysis of Changes in Specialist Inventories and Quotations',
        'News and trading rules',
        'Modeling Stock Order Flows and Learning Market-Making from Data',
        'Liquidity, Transaction Costs, and Reintermediation in Electronic Markets',
        'Statistical Properties of Stock Order Books: Empirical Results and Models',
        '[book]Coping with institutional order flow',
        'Design of a Multi\u2013Unit Double Auction E\u2013Market',
        'Stock Market Structure and Volatility',
        'Trading rules, large blocks and the speed of price adjustment',
        'Market Makers and the Market Spread: A Review of Recent Literature',
        'Equity markets in action : the fundamentals of liquidity, market structure & trading',
        'Payment for Order Flow',
        'Multi-robot exploration controlled by a market economy',
        'Transaction Costs, Order Placement Strategy, and Existence of the Bid-Ask Spread',
        'Toward a fully automated exchange',
        '[book]The Econometrics of Financial Markets',
        'Information Effects on the Bid\u2010Ask Spread',
        'Econometric Models of Limit-Order Executions',
        'A Bayesian model of intraday specialist pricing',
        'Limit Order Book as a Market for Liquidity',
        'Optimal dealer pricing under transactions and return uncertainty',
        'An Electronic Market-Maker',
        'Optimized Execution via Order Book Simulation',
        'Limit Order Trading',
        '[book]When Genius Failed: The Rise and Fall of Long-Term Capital Management',
        'Do Stock Prices Move Too Much to Be Justified by Subsequent Changes in Dividends',
        'Electronic trading in order-driven markets: efficient execution',
        'Measuring the Information Content of Stock Trades',
        '[book]The Little SAS Book: A Primer',
        'Market Making with Costly Monitoring: An Analysis of the SOES Controversy',
        '[book]Market Microstructure Theory',
        'Components of the Bid-Ask Spread and the Statistical Properties of Transaction Prices',
        'EQUILIBRIUM IN A CAPITAL ASSET MARKET',
        'The Summary Informativeness of Stock Trades: An Econometric Analysis',
        'The Components of the Bid-Ask Spread: A General Approach',
        'A sample-path approach to optimal position liquidation',
        'Intelligent Market-Making in Artificial Financial Markets',
        'Brokering and matchmaking for coordination of agent societies: a survey',
        'Quote Setting and Price Formation in an Order Driven Market',
        'Optimal control of execution costs for portfolios',
        'A Specialist\'s Quoted Depth as a Strategic Choice Variable',
        'The Cross\u2010Section of Expected Stock Returns',
        'Liquidity Provision with Limit Orders and a Strategic Specialist',
        'Automated securities trading',
        'Limit Orders, Depth, and Volatility: Evidence from the Stock Exchange of Hong Kong',
        'The Dynamics of Dealer Markets under Competition',
        'Price Impacts of Block Trading on the New York Stock Exchange',
        'The Trades of Market Makers: An Empirical Analysis of NYSE Specialists',
        'Order imbalance, liquidity, and market returns $',
        'Time and the Process of Security Price Adjustment',
        'Inferring the Components of the Bid-Ask Spread: Theory and Empirical Tests',
        'Dealer versus auction markets: A paired comparison of execution costs on NASDAQ and the NYSE',
        'Is the Electronic Open Limit Order Book Inevitable',
        'Screen Information, Trader Activity, and Bid-Ask Spreads in a Limit Order Market',
        'Market Microstructure: A Survey',
        'Market Microstructure: A Survey of Microfoundations, Empirical Results, and Policy Implications',
        'Trades, quotes, inventories, and information'
      ],
      published_date: '2005-01-01',
      area: 'Arts and Humanities',
      category: 'Classics',
      journal: 'Journal of Roman Archaeology',
      link: 'https://www.ri.cmu.edu/pub_files/pub4/nevmyvaka_yuriy_2005_1/nevmyvaka_yuriy_2005_1.pdf'
    }
  }

  getArticlesByAuthor(): Observable<any> {
    return this.http.get('http://localhost:3900/api/users/get_author?author=' + 'Alex');
  }

  getArticleInfoByID(id: number): Observable<any> {
    // return this.article;
    return this.http.get('http://localhost:3900/api/users/get_article_by_id?article_id=' + id);
  }
}
