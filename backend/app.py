from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# In-memory sample storage (replace with DB)
users = [
    {'id':1, 'name':'Admin', 'email':'admin@apt.com', 'role':'admin'},
    {'id':2, 'name':'Owner', 'email':'owner@apt.com', 'role':'owner'},
    {'id':3, 'name':'Renter', 'email':'renter@rent.com', 'role':'renter'}
]

bills = [
    {'id':1, 'user_id':2, 'month':'Oct', 'amount':120, 'type':'maintenance', 'status':'paid'},
    {'id':2, 'user_id':3, 'month':'Nov', 'amount':150, 'type':'rent+electricity', 'status':'unpaid'}
]

complaints = [
    {'id':1, 'user_id':2, 'issue':'Leaking faucet', 'status':'pending', 'response':None},
    {'id':2, 'user_id':3, 'issue':'Noisy neighbor', 'status':'resolved', 'response':'Fixed'}
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.json
    data['id'] = max([u['id'] for u in users]) + 1 if users else 1
    users.append(data)
    return jsonify(data), 201

@app.route('/api/bills', methods=['GET'])
def get_bills():
    return jsonify(bills)

@app.route('/api/bills', methods=['POST'])
def add_bill():
    data = request.json
    data['id'] = max([b['id'] for b in bills]) + 1 if bills else 1
    bills.append(data)
    return jsonify(data), 201

@app.route('/api/complaints', methods=['GET'])
def get_complaints():
    return jsonify(complaints)

@app.route('/api/complaints', methods=['POST'])
def add_complaint():
    data = request.json
    data['id'] = max([c['id'] for c in complaints]) + 1 if complaints else 1
    complaints.append(data)
    return jsonify(data), 201

@app.route('/api/complaints/<int:cid>/respond', methods=['POST'])
def respond_complaint(cid):
    data = request.json
    for c in complaints:
        if c['id'] == cid:
            c['response'] = data.get('response')
            c['status'] = data.get('status', 'resolved')
            return jsonify(c)
    return jsonify({'error':'not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
