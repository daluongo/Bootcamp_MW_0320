import pandas as pd
from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine

app = Flask(__name__)

engine = create_engine("sqlite:///db/emoji.sqlite")

@app.route("/")
def home():
    # Render Home Page
    return render_template("index.html")

@app.route("/emoji_char")
def emoji_char_data():
    conn = engine.connect()
    
    # Query emoji score and emoji char
    query = '''
        SELECT
            emoji_char
            ,score
        FROM
            emoji
        ORDER BY 
            score DESC
        LIMIT 10
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/emoji_id")
def emoji_id_data():
    conn = engine.connect()
    
    # Query emoji score and emoji id
    query = '''
        SELECT
            emoji_id
            ,score
        FROM
            emoji
        ORDER BY 
            score DESC
        LIMIT 10
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

@app.route("/emoji_name")
def emoji_name_data():
    conn = engine.connect()
    
    # Query emoji score and emoji name
    query = '''
        SELECT
            name
            ,score
        FROM
            emoji
        ORDER BY 
            score DESC
        LIMIT 10
    '''

    results_df = pd.read_sql(query, con=conn)
    results_json = results_df.to_json(orient='records')

    conn.close()
    return results_json

if __name__ == '__main__':
    app.run(debug=True)